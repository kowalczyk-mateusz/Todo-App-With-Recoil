/** @jsxImportSource theme-ui */
import React, {useState} from 'react';
import {Heading, Box, Input, Button, Flex} from 'theme-ui';
import {FetchTodos} from '../../Atoms/Atoms'
import {useRecoilState} from 'recoil'

const AddTodo = () => {

    const [allTodos, setAllTodos] = useRecoilState(FetchTodos)

    const [todo, setTodo] = useState()
    const todoHandler = ({target : {value}}) =>{
        setTodo(value)
    }
    const addNewTodo = () => {
        if(todo){
            const id = allTodos[allTodos.length - 1]['id'] + 1 | 0
            setAllTodos((todoList) => [
                ...todoList,
                {
                    completed: false,
                    id: id,
                    title: todo,
                }
            ])
            setTodo('')
        } else {
            alert('Title is empty!')
        }
    }
    
    return (
        <Box bg="primary" p={5} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%',}}>
            <Heading as='h1'>TODO APP</Heading>
            <Flex sx={{justifyContent: 'center', flexWrap: 'wrap', maxWidth: '900px', width: '100%',}}>
                <Input sx={{maxWidth: '600px', width: '100%',padding: '1rem 1rem'}} onChange={todoHandler} value={todo || ''} placeholder='Add Todo...'/>
                <Button ml={3} sx={{padding: '1rem 3rem', cursor: 'pointer'}} variant='primary' onClick={addNewTodo}>Add Todo</Button>
            </Flex>
        </Box>
    );
}

export default AddTodo;