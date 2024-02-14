import React from 'react';
import { useDispatch } from 'react-redux';
import { createTodo } from './todosSlice';

const CreateTodoPage = () => {
    const dispatch = useDispatch();

    const handleCreateTodo = () => {
        dispatch(createTodo());
         };

    return (
        <div>
            <h2>Create Todo Page</h2>
            <button onClick={handleCreateTodo}>Create Todo</button>
        </div>
    );
};

export default CreateTodoPage;
