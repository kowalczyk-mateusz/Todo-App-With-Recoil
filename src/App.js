import React from 'react';
import MainPage from './Components/MainPage/MainPage'
import SearchPage from './Components/SearchPage/SearchPage'
import {Route} from 'react-router-dom'
import Navigation from './Components/Navigation/Navigation'

function App() {
  return (
      <>
        <Navigation />
        <Route path={['/todo/:id', '/']} exact>
          <MainPage/>
        </Route>
        <Route path={['/search/:id,', '/search']}>
          <SearchPage />
        </Route>
      </>
  );
}

export default App;
