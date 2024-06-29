import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './store'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
  useParams,
} from "react-router-dom";

import { log } from './logger'; 
import App from './App.tsx'
import ListsView from './components/ListsView.tsx'
import DetailListView from './components/DetailListView.tsx';
import Layout from './layout/Layout.tsx';
import DashboardLayout from './layout/DashboardLayout.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import ErrorPage from './components/Error.tsx';

log('App started', 'info');

function DetailListViewWrapper() {
  const { listId } = useParams<{ listId: string }>();
  if (!listId) {
    return <Navigate to="*" replace />;
  }
  return <DetailListView listId={listId} />;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <App /> },
    ]
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {path: "/dashboard", element: <ListsView />},
      {path: "/dashboard/:listId", element: <DetailListViewWrapper />}
    ]
  },
  {
    path: "*",
    element:<Layout />,
    children: [
      {path: "*", element: <ErrorPage />}
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
