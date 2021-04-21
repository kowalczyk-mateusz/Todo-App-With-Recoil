import React from 'react';
import EditTodo from './EditTodo'
import {Text, Flex, Box} from 'theme-ui'

const SingleTodo = ({data: {title, id, completed}, data}) => {

    return (

      <Box p={3} sx={{border: '1px solid black', maxWidth: '1000px', margin: '1rem auto', borderRadius: '1rem'}}>
        <Flex sx={{alignItems: 'center', justifyContent: 'space-between'}}>
          <Text sx={{maxWidth: '800px', fontSize: 4, textDecoration: completed ? 'line-through' : 'none'}}>
            {title}
          </Text>
          <EditTodo id={id} data={data}/>
        </Flex>
      </Box>
      
    );
}

export default SingleTodo;