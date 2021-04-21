import React from 'react';
import {FetchTodos, searchTodos} from '../../Atoms/Atoms'
import {Box, Input, Label, Text, Card} from 'theme-ui'
import SearchTodos from './SearchTodos'
import SearchedTodos from './SearchedTodos'
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
  } from 'recoil';
const SearchPage = () => {
    
    const [allTodos, setAllTodos] = useRecoilState(FetchTodos)
    const [searchTodosList, setSearchTodosList] = useRecoilState(searchTodos)
    const searchedTodoList = useRecoilValue(searchTodos)

    const searchTodosHandler = ({target: {value}}) =>{
        const data = allTodos.filter((el)=> el.title.includes(value))
        setSearchTodosList(data)
        
    }
    return (
            <>
                <SearchTodos />
                <SearchedTodos />
            </>
    );
}

export default SearchPage;