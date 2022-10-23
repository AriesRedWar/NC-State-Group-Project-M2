import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'



const NavBar = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                {/* <img
                    src='/Game.jpg'
                    alt="logo"
                /> */}
                <Navbar.Brand href="#home">Home of the Games</Navbar.Brand>
                <Nav className="links">
                    <Nav.Link href="#home">Home Page</Nav.Link>
                    <Nav.Link href="#about">Add a Game</Nav.Link>
                    <Nav.Link href="#create">View Games</Nav.Link>
                </Nav>
            </Navbar>



            {/* <Nav defaultActiveKey="/" variant="tabs" fill>
                    <Nav.Item>
                        <Nav.Link href="/">
                            <Link to="/">Home</Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item >
                        <Nav.Link eventKey={"gamesPage"}>
                            <Link to="/games">Games Page</Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item >
                        <Nav.Link eventKey={"addGame"}>
                            <Link to="/addgames">Add a Game</Link>
                        </Nav.Link>
                    </Nav.Item>
                </Nav> */}
        </div>
    )
}

export default NavBar