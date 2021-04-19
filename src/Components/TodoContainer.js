import React from 'react';
import SingleTodo from './SingleTodo/SingleTodo'
import {Box} from 'theme-ui'
const TodoContainer = () => {
    return (
        <Box>
            <SingleTodo />
            <SingleTodo />
            <SingleTodo />
            <SingleTodo />
            <SingleTodo />
        </Box>
    );
}

export default TodoContainer;