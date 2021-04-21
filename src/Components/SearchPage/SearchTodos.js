import React from 'react';
import {FetchTodos, searchTodos} from '../../Atoms/Atoms'
import {Heading, Box, Input, Button, Flex} from 'theme-ui';
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
  } from 'recoil';
const SearchTodos = () => {
    
    const allTodos = useRecoilValue(FetchTodos)
    const [searchTodosList, setSearchTodosList] = useRecoilState(searchTodos)

    const searchTodosHandler = ({target: {value}}) =>{
        const data = allTodos.filter((el)=> el.title.includes(value))
        setSearchTodosList(data)
        if(value === ''){
            setSearchTodosList('')
        }
    }
    return (
        <Box bg="primary" p={5} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%',}}>
            <Heading as='h1'>TODO APP</Heading>
            <Flex sx={{justifyContent: 'center', flexWrap: 'wrap', maxWidth: '900px', width: '100%',}}>
                <Input placeholder='Search todos...' sx={{padding: '1rem 3rem'}} sx={{maxWidth: '600px', width: '100%',}} onChange={searchTodosHandler}/>
            </Flex>
        </Box>
    );
}

export default SearchTodos;