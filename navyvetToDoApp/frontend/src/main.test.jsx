// Import necessary utilities from testing libraries
import React from 'react';
import { render } from '@testing-library/react';
import App from './App.tsx';
import { Provider } from 'react-redux';
import { store } from './store';
import { MemoryRouter } from 'react-router-dom';


test('true is true', () => {
    expect(true).toBe(true);
  });

// Test case for App component
describe('App Component', () => {
  test('renders without crashing', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>
    );
  });
});