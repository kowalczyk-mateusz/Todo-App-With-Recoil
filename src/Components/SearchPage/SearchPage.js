import React from 'react';
import {Box} from 'theme-ui'
import Search from './Search'
import SearchedTodos from './SearchedTodos'
import { useLocation} from 'react-router-dom'
import SearchedCard from './SearchedCard'
const SearchPage = () => {
    const location = useLocation()
    const id = location.pathname.split('/')[2]
    console.log(id)
    console.log(location)
    console.log(id)

    return (
        <>
            <Box>
                <Search />
                <SearchedTodos />
            </Box>
            {id && (<SearchedCard />)}
            </>
    );
}

export default SearchPage;