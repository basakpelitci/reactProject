import React from 'react';
import Navi from '../navi/Navi';
import Dashboard from './Dashboard';
import {Route, Routes } from 'react-router-dom';
import CartDetail from '../cart/CartDetail';
import { Container } from 'reactstrap';
function App() {
  return (
    <Container >
      <Navi />
        <Routes>
        <Route path='/dashboard' element  = {<Dashboard/>}></Route>,
        <Route path='/product'   element= {<Dashboard/>}></Route>,
        <Route path='/cart'  element = {<CartDetail/>}></Route> 
        </Routes>
     <Dashboard />
    </Container>
  );
}

export default App;
