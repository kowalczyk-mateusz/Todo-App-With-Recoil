/** @jsxImportSource theme-ui */
import TodoContainer from './TodoContainer'
import {Box} from 'theme-ui'
import AddTodo from './AddTodo'
import EditCard from './EditCard'
import {useParams, useLocation} from 'react-router-dom'
import FilterTodos from './FilterTodos'
const MainPage = () => {
  const location = useLocation()

    const {id} = useParams()
    console.log(id)

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