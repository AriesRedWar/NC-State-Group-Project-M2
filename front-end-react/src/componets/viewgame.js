import React from "react";
import { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import "./css/viewgame.css";
import "react-bootstrap/Container";


function Views() {
  const [state, setState] = useState([]);

  const getData = async () => {
    // console.log("We got clicked");
    const data = await fetch("/games");
    // console.log("DATA inital from backed", data);
    const cleanData = await data.json();
    // // console.log("STUFF FROM BACKNED!!", cleanData);
    setState(cleanData);
  };
  console.log("State", state);

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="row col-md-8">
      {state.map((gameEntry) => {
        return (
          <div key={gameEntry._id} className="col-sm-6">
            <div className="container">
              <Link className="link" to={`/games/${gameEntry._id}`}> {gameEntry.gamename}</Link>
              <div className="row">
                  <img
                  type="url"
                    src={gameEntry.pic}
                    className="placeimg"
                    alt={gameEntry.gamename}
                  />
                    <h4>Genre: {gameEntry.genre}</h4>
                {/* <p> Description: {gameEntry.description}</p> */}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Views;
