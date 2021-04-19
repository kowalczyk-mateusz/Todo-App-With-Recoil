/** @jsxImportSource theme-ui */
import TodoContainer from './Components/TodoContainer'
import {Box} from 'theme-ui'
import AddTodo from './Components/AddTodo'
function App() {
  return (
    <Box sx={{
      margin: 0,
      padding: 0,
      width: '100%',
      minHeight: '100vh',
    }}>
      <AddTodo />
      <TodoContainer />
    </Box>
  );
}

export default App;
