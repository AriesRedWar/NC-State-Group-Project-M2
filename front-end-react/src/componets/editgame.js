import React from "react";
import {useState, useEffect} from "react";
import "./css/viewgame.css";

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
    <div>
      {state.map((gameEntry) => {
        return (
          <div key={gameEntry._id} className="container">
            <form id="btn" method="POST">
              <a
                type="click"
                href={`/games/${gameEntry._id}/edit`}
                className="btn btn-warning"
              >
                Edit
              </a>
            </form>
            <form
              id="btn"
              method="delete"
              action={`/games/${gameEntry._id}?_method=DELETE`}
            >
              <button type="submit" className="btn btn-danger">
                Delete
              </button>
            </form>
          </div>
        );
      })}
    </div>
  );
}

export default Views;