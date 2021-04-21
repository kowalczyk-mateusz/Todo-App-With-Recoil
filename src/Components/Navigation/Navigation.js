import React from 'react';
import {Link} from 'react-router-dom'

const Navigation = () => {
    return (
        <>
            <Link to='/'>TODOS</Link>
            <Link to='/search'>SEARCH TODOS</Link>
        </>
    );
}

export default Navigation;