import React from 'react';
import {FetchTodos, searchTodos} from '../../Atoms/Atoms'
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
        const data = allTodos.filter((el)=> el.title === value)
        console.log(data)
        
    }
    return (
        <div>
            <label>wyszukaj cos se tak o </label>
            <input onChange={searchTodosHandler}/>
        </div>
    );
}

export default SearchPage;