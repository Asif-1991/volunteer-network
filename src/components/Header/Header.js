import React from 'react';
import { Nav, Button, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar className="container navbar">
            <img style={{ height: '60px' }} className="logo" src="https://i.ibb.co/60VGHLd/Group-1329.png" alt="Volunteer Network" />
            <Nav style={{ fontColor: '0B0B0B'}} className="ml-auto mx-5">
            <Link className="mt-2 pl-3" to="/">Home</Link>
            <Link className="mt-2 pl-3" to="/login">Donation</Link>               
            <Link className="mt-2 pl-3" to="/login">Events</Link>
            <Link className="mt-2 pl-3" to="/">Blog</Link>            </Nav>
            <Link className="px-4 mx-2 btn btn-primary" to="/registration">Register</Link>
              
            <Link className="px-4 mx-2 btn btn-dark" to="/">Admin</Link>
        </Navbar>

    );
};

export default Header;