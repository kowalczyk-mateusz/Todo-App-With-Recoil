import React from 'react';
import {searchTodos} from '../../Atoms/Atoms'
import {Box} from 'theme-ui'
import SingleTodo from '../MainPage/SingleTodo/SingleTodo'
import {useRecoilValue} from 'recoil';
const SearchedTodos = () => {
    const searchedTodoList = useRecoilValue(searchTodos)
    return (
        <Box>
            {searchedTodoList && (searchedTodoList.map((el)=> <SingleTodo key={el.title} data={el}/>))}
        </Box>
    );
}

export default SearchedTodos;