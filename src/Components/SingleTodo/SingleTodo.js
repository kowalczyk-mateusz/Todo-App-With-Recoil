/** @jsxImportSource theme-ui */
import React from 'react';
import EditTodo from './EditTodo'
import {Text, Flex, Box} from 'theme-ui'
const SingleTodo = () => {
    return (
      <Box p={3} sx={{border: '1px solid black', maxWidth: '1000px', margin: '1rem auto', borderRadius: '1rem'}}>
      <Flex sx={{alignItems: 'center', justifyContent: 'center'}}>
        <Text sx={{textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden',maxWidth: '800px', fontSize: 4,
      }}>
            Lorem ipsum dolor sit amet consorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, perferendis!orem ipsum dolor sit amet consectetur adipisicing elit. Nisi, perferendis!orem ipsum dolor sit amet consectetur adipisicing elit. Nisi, perferendis!ectetur adipisicing elit. Nisi, perferendis!
        </Text>
        <EditTodo />
      </Flex>
      </Box>
    );
}

export default SingleTodo;