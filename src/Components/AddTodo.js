/** @jsxImportSource theme-ui */
import React from 'react';
import {Heading, Box, Input, Button, Flex} from 'theme-ui';
const AddTodo = () => {
    return (
        <Box bg="primary" p={5} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%',}}>
            <Heading as='h1'>TODO APP</Heading>
            <Flex sx={{justifyContent: 'center', flexWrap: 'wrap', maxWidth: '900px', width: '100%',}}>
                <Input sx={{padding: '1rem 3rem'}} sx={{maxWidth: '600px', width: '100%',}}/>
                <Button sx={{padding: '1rem 3rem'}} variant='primary'>Add Todo</Button>
            </Flex>
        </Box>
    );
}

export default AddTodo;