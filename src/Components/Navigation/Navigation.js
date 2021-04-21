import React from 'react';
import {Link} from 'react-router-dom'
import {Flex, Text} from 'theme-ui'
const Navigation = () => {
    return (
        <Flex p={2} bg="primary" sx={{justifyContent: 'center', fontSize: '1.5rem'}}>
            <Link style={{textDecoration: 'none'}} to='/'><Text pl={5} pr={5} sx={{color: 'white'}}>TODOS</Text></Link>
            <Link style={{textDecoration: 'none'}} to='/search'><Text pl={5} pr={5} sx={{color: 'white'}}>SEARCH TODOS</Text></Link>
        </Flex>
    );
}

export default Navigation;