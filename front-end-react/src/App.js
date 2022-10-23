import "./App.css";
import Home from "./componets/home";
import Game from "./componets/game";
import Addgame from "./componets/addgame";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import NavBar from "./componets/navbar";

function App() {
  return (
    <div>
      <NavBar />
      <h1>Test home </h1>
      <Router>
        <header>
          <div className="home"></div>
          <div className="display">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/game" element={<Game />} />
              <Route path="/addgame" element={<Addgame />} />
            </Routes>
          </div>
        </header>
      </Router>
    </div>
  );
}

export default App;
