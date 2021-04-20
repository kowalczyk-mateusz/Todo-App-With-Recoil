import React from 'react';
import MainPage from './Components/MainPage/MainPage'
import SearchPage from './Components/SearchPage/SearchPage'
import {Route} from 'react-router-dom'

function App() {


  return (
  
  <>
           <Route path={['/todo/:id', '/']}>
          <MainPage/>
          </Route>
          <SearchPage />
  </>
  );
}

export default App;
