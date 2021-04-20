import React from 'react';
import MainPage from './Components/MainPage/MainPage'
import {Route} from 'react-router-dom'
function App() {


  return (
  
  <>
           <Route path={['/todo/:id', '/']}>
          <MainPage/>
          </Route>
  </>
  );
}

export default App;
