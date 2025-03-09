import React from 'react';
import { render, screen } from '@testing-library/react';
import { ToastProvider } from '@chakra-ui/react'; // If you're using Chakra's Toast context
import userEvent from '@testing-library/user-event';
import SignUp from './SignUp'; // Adjust the import path as necessary
const mockStore = configureStore([]);
import { Provider } from "react-redux";
import configureStore from 'redux-mock-store';
import { MemoryRouter } from "react-router-dom";

describe('SignUp Component', () => {
  const store = mockStore({
    auth: {
      isSuccessMsg: false,
      user: {}, 
    },
  });
  beforeEach(() => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <SignUp />
        </MemoryRouter>
      </Provider>
    );
  });

  test('renders all input elements', () => {
    expect(screen.getByLabelText(/first name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/last name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/city/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/mobile/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/role/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
  });

  test('allows users to type in input fields',  () => {
    const firstNameInput = screen.getByLabelText(/first name/i);
    const lastNameInput = screen.getByLabelText(/last name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const cityInput = screen.getByLabelText(/city/i);
    const mobileInput = screen.getByLabelText(/mobile/i);
    const roleSelect = screen.getByLabelText(/role/i);

     userEvent.type(firstNameInput, 'John');
     userEvent.type(lastNameInput, 'Doe');
     userEvent.type(emailInput, 'john.doe@example.com');
     userEvent.type(passwordInput, 'password123');
     userEvent.type(cityInput, 'New York');
     userEvent.type(mobileInput, '1234567890');
     userEvent.selectOptions(roleSelect, 'lessee');

    expect(firstNameInput.value).toBe('John');
    expect(lastNameInput.value).toBe('Doe');
    expect(emailInput.value).toBe('john.doe@example.com');
    expect(passwordInput.value).toBe('password123');
    expect(cityInput.value).toBe('New York');
    expect(mobileInput.value).toBe('1234567890');
    expect(roleSelect.value).toBe('lessee');
  });
});
