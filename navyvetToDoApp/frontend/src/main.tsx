import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { log } from './logger'; 
import App from './App.tsx'
import Layout from './layout/Layout.tsx';
import DashboardLayout from './layout/DashboardLayout.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';

log('App started', 'info');

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
      {path: "/dashboard", element: <App />},
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
