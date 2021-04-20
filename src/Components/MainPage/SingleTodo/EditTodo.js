/** @jsxImportSource theme-ui */
import React from 'react';
import EditIcon from '../../../Assets/Icons/EditIcon'
import DeleteIcon from '../../../Assets/Icons/DeleteIcon'
import DoneIcon from '../../../Assets/Icons/DoneIcon'
import {Flex, Box} from 'theme-ui'
import {Link} from 'react-router-dom'
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
  } from 'recoil';
  import {FetchTodos} from '../../../Atoms/Atoms'
const EditTodo = ({id, data}) => {

    const [allTodos, setAllTodos] = useRecoilState(FetchTodos)
    const index = allTodos.findIndex((item)=> item === data)

    //CHANGE COMPLETE/UNCOMPLETE
    const changeStatus = () =>{
        const newTodos = changeItemWithId(allTodos, index , {
            ...data,
            completed: !data.completed, 
        })
        setAllTodos(newTodos)
    }

    //DELETE TODO
    const deleteTodo =() =>{
        const newTodos = deleteItemWithId(allTodos, index)

        setAllTodos(newTodos)
    }
    return (
        <Flex sx={{minWidth: '9rem'}}>
            <Link to={`/todo/${index}`}>
            <EditIcon />
            </Link>
            <Box onClick={changeStatus} sx={{cursor: 'pointer'}}>
            <DoneIcon completed={data.completed}/>
            </Box>
            <Box onClick={deleteTodo} sx={{cursor: 'pointer'}}>
            <DeleteIcon/>
            </Box>
        </Flex>
    );
}

const changeItemWithId = (todos, index, newTodos) => {
    return [...todos.slice(0, index), newTodos, ...todos.slice(index + 1)]
}
const deleteItemWithId = (todos, index) => {
    return[...todos.slice(0, index), ...todos.slice(index + 1)];
}

export default EditTodo;