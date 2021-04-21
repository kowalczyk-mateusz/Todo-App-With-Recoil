import React, {useState, useEffect} from 'react';
import {Box, Flex, Input, Button, Text} from 'theme-ui'
import {useLocation, useHistory} from 'react-router-dom'
import {useRecoilState, useRecoilValue} from 'recoil';
import {FetchTodos} from '../../Atoms/Atoms'
const SearchedCard = () => {
    const location = useLocation()
    const id = location.pathname.split('/')[2]
    const history = useHistory()
    const data = useRecoilValue(FetchTodos)
    const [allTodos, setAllTodos] = useRecoilState(FetchTodos)
    const [newTodo, setNewTodo] = useState(allTodos[id])
    const [newData, setNewData] = useState()
    const index = allTodos.findIndex((item) => item === newTodo);
    const exitEditCard = ({target}) =>{
        if(target.classList.contains('shadow')){
            history.push('/search')
        }
    }

    useEffect(()=>{
        setNewTodo(allTodos[id])
        setAllTodos(data)
    }, [allTodos])

    const editTodo = () =>{
        if(newData === undefined){
            setNewData('')
        }
        const editedTodos = changeItemWithId(allTodos, index, {
            ...newTodo,
            title: newData
        })
        setAllTodos(editedTodos)
        history.push('/search')
    }
    return (
        <Box className='shadow' onClick={exitEditCard} sx={{position: 'fixed', width: '100%', height: '100vh', backgroundColor: 'rgba(0,0,0,0.5)', top: 0, left: 0, display: 'grid', placeItems: 'center'}}>
            <Flex p={5} sx={{width: '100%', maxWidth: '500px', height: '300px', backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                <Text mb={2} sx={{fontSize: '2rem'}}>Edit Todo</Text>
                <Input mb={2} defaultValue={newTodo.title} onChange={(e)=>setNewData(e.target.value)}/>
                <Button onClick={editTodo}>Save</Button>
            </Flex>
        </Box>
    );
}

const changeItemWithId = (todos, index, newTodos) => {
    return [...todos.slice(0, index), newTodos, ...todos.slice(index + 1)]
}
export default SearchedCard;