/** @jsxImportSource theme-ui */
import TodoContainer from './TodoContainer'
import {Box, Select, Flex, Text} from 'theme-ui'
import AddTodo from './AddTodo'
import {allTodos, todoCounter} from '../../Atoms/Atoms'
import EditCard from './EditCard'
import {useLocation, useParams} from 'react-router-dom'
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
const MainPage = () => {
    
    const [filter, setFilter] = useRecoilState(allTodos)
    const {todosLength, completedLength, uncompletedLength} = useRecoilValue(todoCounter)
    const {id} = useParams()
  
    const filterTodos = ({target: {value}}) => {
     setFilter(value)
    }
    return (
        <>
        <Box sx={{
          margin: 0,
          padding: 0,
          width: '100%',
          minHeight: '100vh',
        }}>
          <AddTodo />
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
          <TodoContainer />
    
        </Box>
        {id &&(<EditCard />)}
        </>
      );
}

export default MainPage;