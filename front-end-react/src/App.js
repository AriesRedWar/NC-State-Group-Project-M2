import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./componets/home";
import Views from "./componets/viewgame";
import Addgame from "./componets/addgame";
import Editgame from "./componets/editgame";
import Showgame from "./componets/ShowGame";
import {BrowserRouter, Router, Routes, Route } from "react-router-dom";
import NavBar from "./componets/navbar";
import NotFound from "./componets/error404";
import React from "react";

function App() {
  return (
    <main>

      <NavBar />
      <BrowserRouter>
           <Router>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/game" element={<Views />} />
              <Route exact path="/addgame" element={<Addgame />} />
              <Route exact path="/games/:id/edit" element={<Editgame />} />
              <Route exact path="/games/:id" element={<Showgame />} />
              <Route exact path="*" element={<NotFound />} />
            </Routes>
      </Router>
      </BrowserRouter>
      <footer className="footer">
        <h4>
          Site created by: <br />
          Philip Bowman <a href="https://github.com/AriesRedWar">
            GitHub,
          </a>{" "}
          <br />
          Shetara Smith <a href="https://github.com/shetara2022">
            GitHub,
          </a>{" "}
          <br />
          Michael Manley <a href="https://github.com/execchef23">GitHub</a>
        </h4>
      </footer>

    </main>
    
  );
}

export default App;
