import TodoContainer from './TodoContainer'
import {Box} from 'theme-ui'
import AddTodo from './AddTodo'
import EditCard from './EditCard'
import {useParams} from 'react-router-dom'
import FilterTodos from './FilterTodos'
const MainPage = () => {
    const {id} = useParams()
    return (
        <>
            <Box sx={{margin: 0,padding: 0,width: '100%',minHeight: '100vh'}}>
              <AddTodo />
              <FilterTodos />
              <TodoContainer />
            </Box>
            {id &&(<EditCard />)}
        </>
      );
}

export default MainPage;