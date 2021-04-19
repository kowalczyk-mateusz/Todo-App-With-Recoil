/** @jsxImportSource theme-ui */
import React from 'react';
import EditIcon from '../../Assets/Icons/EditIcon'
import DeleteIcon from '../../Assets/Icons/DeleteIcon'
import DoneIcon from '../../Assets/Icons/DoneIcon'
import {Flex} from 'theme-ui'
const EditTodo = () => {
    return (
        <Flex sx={{minWidth: '9rem'}}>
            <EditIcon/>
            <DoneIcon />
            <DeleteIcon/>
        </Flex>
    );
}

export default EditTodo;