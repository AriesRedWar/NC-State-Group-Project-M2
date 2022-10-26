import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./componets/home";
import Game from "./componets/game";
import Addgame from "./componets/addgame";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./componets/navbar";
import NotFound from "./componets/error404";

function App() {
  return (
    <div>
      <NavBar />
      <Router>
        <header>
          <div className="home"></div>
          <div className="display">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/game" element={<Game />} />
              <Route path="/addgame" element={<Addgame />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </header>
      </Router>
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
    </div>
  );
}

export default App;
