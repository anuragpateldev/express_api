import React from 'react';
import { NavLink } from "react-router-dom";
import {Container,Navbar} from 'react-bootstrap';
import './ApNavbar.css';

const ApNavbar = () =>{
    return (
        <div className='Navbar__parent'>
        <Navbar>
            <Container>
                <NavLink to="/" className="memory_btn" style={{color:'#fff'}}>CRUD App</NavLink>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    <NavLink to="/auth" className="memory_btn" style={{color:'#fff'}}>Sign in</NavLink>
                </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
    );
}

export default ApNavbar;