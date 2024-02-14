
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
const LOGIN_URL = 'https://your-authentication-url.com/login';

export const login = createAsyncThunk('auth/login', async (userData) => {
    const response = await fetch(LOGIN_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });
    const data = await response.json();
    return data;
});

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        loading: 'idle',
        error: null,
    },
    reducers: {
        logout(state) {
            state.user = null;
        },
    },
    extraReducers: {
        [login.pending]: (state) => {
            state.loading = 'pending';
            state.error = null;
        },
        [login.fulfilled]: (state, action) => {
            state.loading = 'idle';
            state.user = action.payload.user;
        },
        [login.rejected]: (state, action) => {
            state.loading = 'idle';
            state.error = action.error.message;
        },
    },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
