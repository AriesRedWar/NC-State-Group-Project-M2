import './css/navbar.css'
import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Views from './viewgame'
import AddGame from './addgame'
import Navbar from 'react-bootstrap/Navbar';
import logo from './logo.jpeg' // relative path to image 

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <img className="logo"
                src={logo}
                alt="logo" />
            <Navbar.Brand href="/">Home of the Games</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="/addgame" element={<AddGame />}>Add a Game</Nav.Link>
                <Nav.Link href="/game" element={<Views />}>View Games</Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default NavBar
