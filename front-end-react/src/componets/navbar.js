import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Home from './home';
import Game from './game'
import Addgame from './addgame'



const NavBar = () => {
    return (
        <div>
            <Nav fill variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link href="/" element={<Home />}>Games Home Page</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/addgame" element={<Addgame />}>Add a Game</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/Game" element={<Game />}>View Games</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    )
}

export default NavBar