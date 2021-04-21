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
        <Flex>
        <Flex sx={{justifyContent: 'center'}}>
          <Text>Filter: </Text>
        <Select value={filter} onChange={filterTodos} sx={{width: '10rem'}}>
                <option value='Show All'>All</option>
                <option value='Show Completed'>Completed</option>
                <option value='Show Uncompleted'>Uncompleted</option>
              </Select>
        </Flex>
        <Box>
        <Text>All Todos: {todosLength}</Text>
        <Text>Completed Todos: {completedLength}</Text>
        <Text>Uncompleted Todos: {uncompletedLength}</Text>
        </Box>
        </Flex>
    );
}

export default FilterTodos;