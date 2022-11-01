import React from "react";
import { useState, useEffect } from "react";
import "./css/viewgame.css";

import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function ViewsEdit() {
  const [state, setState] = useState([]);
  let { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [describe, setDescribe] = useState("");
  const [image, setImage] = useState("");

  const getData = async () => {
    // console.log("We got clicked");
    const data = await fetch("/games/" + id);
    // console.log("DATA inital from backed", data);

    const cleanData = await data.json();
    // console.log("STUFF FROM BACKNED!!", cleanData);
    setState(cleanData);
    setName(cleanData.gamename);
    setGenre(cleanData.genre);
    setDescribe(cleanData.description);
    setImage(cleanData.image);
  };

  useEffect(() => {
    getData();
  }, []);

  const editGame = async () => {
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        gamename: name,
        genre: genre,
        description: describe,
        pic: image,
      }),
    };

    // fetch !!

    const data = await fetch("/games/" + id, requestOptions).then(
      navigate("/game")
    );
    console.log("Data!!! from edit", data);
  };

  return (
    <div>
      <div>
        <h2>Edit the game below</h2>
      </div>
      <div className="formContainer">
        <label style={{ textAlign: "left" }}>Name of Game</label>
        <input
          defaultValue={state.gamename}
          style={{ display: "block" }}
          onChange={(e) => setName(e.target.value)}
        />
        <label style={{ textAlign: "left" }}>Game Image</label>
        <input
          defaultValue={state.pic}
          style={{ display: "block" }}
          onChange={(e) => setImage(e.target.value)}
        />
        <label style={{ textAlign: "left" }}>Game Genre</label>
        <input
          defaultValue={state.genre}
          style={{ display: "block" }}
          onChange={(e) => setGenre(e.target.value)}
        />
        <label style={{ textAlign: "left" }}>Game Description</label>
        <textarea
          defaultValue={state.description}
          style={{ display: "block" }}
          onChange={(e) => setDescribe(e.target.value)}
        ></textarea>
        <div className="button">
          <button onClick={editGame} className="btn btn-primary">
            Update
          </button>
        </div>
      </div>
    </div>
  );
}

export default ViewsEdit;
