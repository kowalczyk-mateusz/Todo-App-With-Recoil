/** @jsxImportSource theme-ui */
import React, {useState} from 'react';
import {Heading, Box, Input, Button, Flex} from 'theme-ui';
import {FetchTodos, filteredTodos} from '../../Atoms/Atoms'
import {useRecoilState} from 'recoil'
const AddTodo = () => {

    const [allTodos, setAllTodos] = useRecoilState(FetchTodos)

    const [todo, setTodo] = useState()
    const todoHandler = ({target : {value}}) =>{
        setTodo(value)
    }
    const addNewTodo = () => {
        const id = allTodos[allTodos.length - 1]['id'] + 1
        setAllTodos((todoList) => [
            ...todoList,
            {
                completed: false,
                id: id,
                title: todo,
            }
        ])
        setTodo('')
    }
    
    return (
        <Box bg="primary" p={5} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%',}}>
            <Heading as='h1'>TODO APP</Heading>
            <Flex sx={{justifyContent: 'center', flexWrap: 'wrap', maxWidth: '900px', width: '100%',}}>
                <Input sx={{padding: '1rem 3rem'}} sx={{maxWidth: '600px', width: '100%',}} onChange={todoHandler} value={todo || ''}/>
                <Button sx={{padding: '1rem 3rem'}} variant='primary' onClick={addNewTodo}>Add Todo</Button>
            </Flex>
        </Box>
    );
}

export default AddTodo;