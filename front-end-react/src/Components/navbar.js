import React from 'react'
import Nav from 'react-bootstrap/Nav'



const NavBar = () => {
    return (
        <div>
            <Nav fill variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link href="/home">Games Home Page</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Add a Game</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">View Games</Nav.Link>
                </Nav.Item>
            </Nav>



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