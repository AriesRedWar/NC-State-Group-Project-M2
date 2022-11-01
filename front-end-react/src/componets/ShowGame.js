import React from "react";
import { useState, useEffect } from "react";
import "./css/viewgame.css";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function ViewsShow() {
  let { id } = useParams();
  const navigate = useNavigate();
  console.log(id);

  const [state, setState] = useState({});
  const getData = async () => {
    // console.log("We got clicked", id);
    const data = await fetch("/games/" + id);
    // console.log("DATA inital from backed", data);

    const cleanData = await data.json();
    // console.log("STUFF FROM BACKNED!!", cleanData);
    setState(cleanData);
  };
//   console.log("State", state);

  useEffect(() => {
    getData();
  }, []);

  const deleteGame = async () => {
    console.log('Hello from delete click')
    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    };

    // fetch !!
    const data = await fetch("/games/" + id, requestOptions);
    // const cleanData = await data.json();
    // setState(cleanData);
    console.log("Data!!! from delte", data);
    navigate("/game");
  };

  return (
    <div>
      <div key={id} className="container">
        <h1>{state.gamename}</h1>
        <img className="placeimg2" src={state.pic} alt={state.gamename} />
        <h4>Genre: {state.genre}</h4>
        <p> Description: {state.description}</p>
        <div className="buttons">
          <form className="edit" id="btn" method="POST">
            <a
              type="click"
              href={`/games/${state._id}/edit`}
              className="btn btn-warning"
            >
              Edit
            </a>
          </form>
          <button onClick={deleteGame} className="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ViewsShow;