import React from "react";
import { useState, useEffect } from "react";
import "./css/viewgame.css";
import "react-bootstrap/Container";

function Views() {
  const [state, setState] = useState([]);

  const getData = async () => {
    // console.log("We got clicked");
    const data = await fetch("/games");
    // console.log("DATA inital from backed", data);

    const cleanData = await data.json();
    // console.log("STUFF FROM BACKNED!!", cleanData);
    setState(cleanData);
  };
  //   console.log("State", state);

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="row col-md-8">
      {state.map((gameEntry) => {
        return (
          <div className="col-sm-6">
            <div key={gameEntry._id} className="container">
              <h3>{gameEntry.gamename}</h3>
              <div className="row">
                <div className="row col-sm-6">
                  {" "}
                  <img
                    className="placeimg"
                    src={gameEntry.pic}
                    alt={gameEntry.gamename}
                  />
                  <div className="row col-sm-6">
                    <form id="btn" method="POST">
                      <a
                        type="click"
                        href={`/games/${gameEntry._id}/edit`}
                        className="btn btn-warning"
                      >
                        {" "}
                        Edit{" "}
                      </a>
                    </form>
                  </div>
                  <div className="row">
                    {" "}
                    <h5>Genre: {gameEntry.genre}</h5>
                  </div>
                </div>
                {/* <div className="row"> */}{" "}
                <p> Description: {gameEntry.description}</p>
              </div>
            </div>
          </div>
          // </div>
        );
      })}
    </div>
  );
}

export default Views;
