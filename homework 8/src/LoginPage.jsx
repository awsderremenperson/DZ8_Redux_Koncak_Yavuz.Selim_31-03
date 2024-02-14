// LoginPage.js

import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from './authSlice';

const LoginPage = () => {
    const dispatch = useDispatch();

    const handleLogin = () => {
        dispatch(login());
    };

    return (
        <div>
            <h2>Login Page</h2>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default LoginPage;
