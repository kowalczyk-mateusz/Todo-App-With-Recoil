import React from 'react';
import {Link} from 'react-router-dom'
import {Flex, Text} from 'theme-ui'
const Navigation = () => {
    return (
        <Flex p={3} bg="primary" sx={{justifyContent: 'center', fontSize: '1.5rem'}}>
            <Link style={{textDecoration: 'none'}} to='/'><Text m={2} sx={{color: 'white', border: '1px solid white', padding: '0.5rem 1rem', borderRadius: '1rem'}}>TODOS</Text></Link>
            <Link style={{textDecoration: 'none'}} to='/search'><Text m={2} sx={{color: 'white', border: '1px solid white', padding: '0.5rem 1rem', borderRadius: '1rem'}}>SEARCH TODOS</Text></Link>
        </Flex>
    );
}

export default Navigation;