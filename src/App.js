import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes component

import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';
import MainNavigation from './shared/components/Navigation/MainNavigation';

function App() {
  return (
    <Router>
      <MainNavigation/>
      <Routes> 
        <Route path="/" exact element={<Users />} /> 
        <Route path='/places/new' element={<NewPlace/>}/>
      </Routes>
     
    </Router>
  );
}

export default App;
