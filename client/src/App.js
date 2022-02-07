import React,{useState,useEffect} from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import Home from './components/Home/Home';
import ApNavbar from './components/Navbar/ApNavbar';
import Auth from './components/Auth/Auth';

import { BrowserRouter ,Switch ,Route } from "react-router-dom";

const App = ()=>{
    return (
      <BrowserRouter>
        <Container>
        <ApNavbar/>
          <Switch>
            <Route exact component={Home} path="/" />
            <Route exact component={Auth} path="/auth" />
          </Switch>
        </Container>
      </BrowserRouter>
    )
}

export default App;