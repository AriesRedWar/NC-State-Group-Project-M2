import "./css/navbar.css";
import React from "react";
import Nav from "react-bootstrap/Nav";
import Home from "./home";
import Game from "./game";
import AddGame from "./addgame";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <img className="logo" src="./logo.jpeg" alt="logo" />
      <Navbar.Brand href="/">Home of the Games</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/" element={<Home />}>
          Games Home Page
        </Nav.Link>
        <Nav.Link href="/addgame" element={<AddGame />}>
          Add a Game
        </Nav.Link>
        <Nav.Link href="/game" element={<Game />}>
          View Games
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
