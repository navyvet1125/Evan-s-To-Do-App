// import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import NewListModal from './NewListModal';

const mockStore = configureStore([]);
const store = mockStore({});

describe('NewListModal', () => {
  it('renders correctly', () => {
    render(
      <Provider store={store}>
        <NewListModal show={true} handleClose={() => {}} />
      </Provider>
    );
    expect(screen.getByLabelText(/list name/i)).toBeInTheDocument();
  });

  it('updates input value on change', () => {
    render(
      <Provider store={store}>
        <NewListModal show={true} handleClose={() => {}} />
      </Provider>
    );
    const input = screen.getByPlaceholderText(/enter list name/i);
    fireEvent.change(input, { target: { value: 'New List' } });
    expect(input).toHaveValue('New List');
  });

  it('dispatches action on save', () => {
    const handleClose = jest.fn();
    render(
      <Provider store={store}>
        <NewListModal show={true} handleClose={handleClose} />
      </Provider>
    );
    fireEvent.click(screen.getByText(/save changes/i));
    // Here you would assert that your store dispatched the expected action.
    // This step depends on your Redux setup and might require additional mocking or setup to capture dispatched actions.
  });
});