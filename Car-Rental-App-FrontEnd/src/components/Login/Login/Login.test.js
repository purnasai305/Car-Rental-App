import { render, screen,fireEvent  } from "@testing-library/react";
import Login from "./Login";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from 'redux-mock-store';
import userEvent from "@testing-library/user-event";
import * as AuthActions from '../../../redux/Auth/Auth.action';
import SignUp from "../signup/SignUp";

const mockStore = configureStore([]);

it('renders Email and Password input fields', () => {
    const store = mockStore({
        auth: {
            isSuccessMsg: false,
            user: {}, // mock user state if needed
        },
    });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <Login />
            </MemoryRouter>
        </Provider>
    );
    const emailInput = screen.getByPlaceholderText('Email');
    console.log(emailInput);
    expect(emailInput).toBeInTheDocument();

    const PasswordInput = screen.getByPlaceholderText('Password');
    expect(PasswordInput).toBeInTheDocument();

    const loginButton = screen.getByRole('button', { name: /login/i });
    expect(loginButton).toBeInTheDocument();
})

it("updated the Email and Password fields correctly", () => {
    const store = mockStore({
        auth: {
            isSuccessMsg: false,
            user: {},
        },
    });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <Login />
            </MemoryRouter>
        </Provider>
    );
    const emailInput = screen.getByPlaceholderText("Email");
    userEvent.type(emailInput, "test@example.com");
    expect(emailInput.value).toBe("test@example.com");

    const PasswordInput = screen.getByPlaceholderText("Password");
    userEvent.type(PasswordInput, "mypassword");
    expect(PasswordInput.value).toBe("mypassword");
})
