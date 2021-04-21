import React from 'react';
import {Box, Select, Flex, Text} from 'theme-ui'
import {allTodos, todoCounter} from '../../Atoms/Atoms'
import {useRecoilState,useRecoilValue} from 'recoil';

const FilterTodos = () => {

    const [filter, setFilter] = useRecoilState(allTodos)
    const {todosLength, completedLength, uncompletedLength} = useRecoilValue(todoCounter)
    
    const filterTodos = ({target: {value}}) => {
        setFilter(value)
       }

    return (
        <Flex p={2} sx={{justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center'}}>
          <Flex sx={{justifyContent: 'center', height: '2rem'}}>
            <Text pr={2} sx={{lineHeight: '2rem%', fontSize: '1.3rem'}}>Filter: </Text>
            <Select value={filter} onChange={filterTodos} sx={{width: '10rem', height: '2rem'}}>
              <option value='Show All'>All</option>
              <option value='Show Completed'>Completed</option>
              <option value='Show Uncompleted'>Uncompleted</option>
            </Select>
          </Flex>
          <Box m={2}sx={{lineHeight: '2rem%', fontSize: '1.3rem'}}>
            <Text px={2}>All Todos: {todosLength}</Text>
            <Text px={2}>Completed Todos: {completedLength}</Text>
            <Text px={2}>Uncompleted Todos: {uncompletedLength}</Text>
          </Box>
        </Flex>
    );
}

export default FilterTodos;