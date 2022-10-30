import React from "react";
import { useState, useEffect } from "react";
import "./css/viewgame.css";
import { useParams } from "react-router-dom"
import { useNavigate } from 'react-router-dom';



function ViewsShow() {
  const [state, setState] = useState({});
  let { id } = useParams()
  const navigate = useNavigate();
  console.log(id)

  const getData = async () => {
    console.log("We got clicked", id);
    const data = await fetch("/games/" + id);
    console.log("DATA inital from backed", data);

    const cleanData = await data.json();
    console.log("STUFF FROM BACKNED!!", cleanData);
    setState(cleanData);
  };
  console.log("State", state);

  useEffect(() => {
    getData();
  }, []);

  const deleteGame = async () => {

    console.log('Hello from delete click')
    const requestOptions = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    };


    // fetch !!
    const data = await fetch("/games/" + id, requestOptions);
    console.log('Data!!! from delte', data)
    navigate('/game');
  }

  return (

    <div>

      <div key={state._id} className="container">
        <h1>{state.gamename}</h1>
        <form id="btn" method="POST">
          <a
            type="click"
            href={`/games/${state._id}/edit`}
            className="btn btn-warning"
          >
            Edit
          </a>
        </form>
        {/* <form
          id="btn"
          method="delete"
          action={`/games/${state._id}?_method=DELETE`}
        > */}
        <button onClick={deleteGame} className="btn btn-danger">
          Delete
        </button>
        {/* </form> */}
      </div>

    </div>
  );
}

export default ViewsShow;