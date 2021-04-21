import React, {useEffect} from 'react';
import {FetchTodos, searchTodos} from '../../Atoms/Atoms'
import {Heading, Box, Input, Flex} from 'theme-ui';
import {useRecoilState,useRecoilValue} from 'recoil';
const Search = () => {
    
    const allTodos = useRecoilValue(FetchTodos)
    const [searchTodosList, setSearchTodosList] = useRecoilState(searchTodos)


    useEffect(()=>{
            setSearchTodosList(allTodos)
    }, [allTodos])
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

export default Search;