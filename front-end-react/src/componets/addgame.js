import { useState } from "react";
import Button from "react-bootstrap/Button";
import "./css/addgame.css";
import { useNavigate } from "react-router-dom";

function AddGame() {
  //create states
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [describe, setDescribe] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  const reload = async () => {
    navigate("/");
  };

  const handleSave = async () => {
    console.log("We got clicked!");
    // window.location.reload(false);
    navigate("/game");
    // const data = await fetch('/games')
    //         console.log('DATA inital from backed', data)

    //         const cleanData = await data.json()
    // console.log('STUFF FROM BACKNED!!', cleanData)

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        gamename: name,
        genre: genre,
        description: describe,
        pic: image,
      }),
    };
    const data = await fetch("/games", requestOptions);
    const cleanData = await data.json();
    console.log("we just saved this ", cleanData);
  };

  return (
    <>
      <div className="intro">
        <h2>Do you have a game to share? </h2>
        <h3>Add your game below!</h3>
      </div>

      <div className="formContainer">
        <label style={{ textAlign: "left" }}>Name of Game</label>
        <input
          onChange={(e) => {
            setName(e.target.value);
          }}
          style={{ display: "block" }}
          value={name}
        />
        <label style={{ textAlign: "left" }}>Game Image</label>
        <input
          type="url"
          onChange={(e) => {
            setImage(e.target.value);
          }}
          style={{ display: "block" }}
          value={image}
        />
        <label style={{ textAlign: "left" }}>Game Genre</label>
        <input
          onChange={(e) => {
            setGenre(e.target.value);
          }}
          style={{ display: "block" }}
          value={genre}
        />
        <label style={{ textAlign: "left" }}>Game Description</label>
        <textarea
          onChange={(e) => {
            setDescribe(e.target.value);
          }}
          style={{ display: "block" }}
          value={describe}
        />
      </div>
      <div className="button">
        <Button
          onClick={handleSave}
          type="submit"
          disabled={!name || !describe || !genre || !image}
          variant="secondary"
          size="lg"
        >
          Submit
        </Button>
        <Button type="cancel" onClick={reload} variant="secondary" size="lg">
          Cancel
        </Button>
      </div>
    </>
  );
}

export default AddGame;
