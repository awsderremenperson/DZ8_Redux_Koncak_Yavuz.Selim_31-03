import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const CREATE_TODO_URL = 'https://dummyjson.com/auth/todos/add';

export const createTodo = createAsyncThunk('todos/createTodo', async (todoData, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token;
    const response = await fetch(CREATE_TODO_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(todoData),
    });
    const data = await response.json();
    return data;
});

const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
        loading: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: {
        [createTodo.pending]: (state) => {
            state.loading = 'pending';
            state.error = null;
        },
        [createTodo.fulfilled]: (state, action) => {
            state.loading = 'idle';
            state.todos.push(action.payload.todo);
        },
        [createTodo.rejected]: (state, action) => {
            state.loading = 'idle';
            state.error = action.error.message;
        },
    },
});

export default todosSlice.reducer;
