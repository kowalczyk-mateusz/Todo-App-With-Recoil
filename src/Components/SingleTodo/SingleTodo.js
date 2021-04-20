/** @jsxImportSource theme-ui */
import React from 'react';
import EditTodo from './EditTodo'
import {Text, Flex, Box} from 'theme-ui'
const SingleTodo = ({data: {title, id, created_at, completed}}) => {
    return (
      <Box p={3} sx={{border: '1px solid black', maxWidth: '1000px', margin: '1rem auto', borderRadius: '1rem'}}>
      <Flex sx={{alignItems: 'center', justifyContent: 'space-between'}}>
        <Text sx={{textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden',maxWidth: '800px', fontSize: 4, textDecoration: completed ? 'line-through' : 'none',
      }}>
            {title}
        </Text>
        <EditTodo />
      </Flex>
      </Box>
    );
}

export default SingleTodo;