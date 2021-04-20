import React, { useEffect, useState } from 'react';
import SingleTodo from './SingleTodo/SingleTodo'
import {Box} from 'theme-ui'
import {FetchTodos, filteredTodos} from '../../Atoms/Atoms'
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
  } from 'recoil';

const TodoContainer = () => {

    const [allTodos, setAllTodos] = useRecoilState(FetchTodos)
    const todoList = useRecoilValue(filteredTodos)
    const [isLoading, setIsLoading] = useState(false)
    useEffect(()=>{
        const getTodos = async () => {
            setIsLoading(true)
            const url = `https://gorest.co.in/public-api/todos`;
            const resp = await fetch(url)
            const body = await resp.json()
            setAllTodos(body.data)
        }
        getTodos()
        setIsLoading(false)
    }, [])


    return (
        <Box>
            {!isLoading &&(
            todoList.map((el)=><SingleTodo key={el.title} data={el}/>))}
        </Box>
    );
}

export default TodoContainer;