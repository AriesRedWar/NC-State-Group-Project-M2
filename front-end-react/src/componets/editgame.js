import React from "react";
import { useState, useEffect } from "react";
import "./css/viewgame.css";
import { useParams } from 'react-router-dom'


function ViewsEdit() {
  const [state, setState] = useState([]);
  const [name, setName] = useState('')
  const [genre, setGenre] = useState('')
  const [describe, setDescribe] = useState('')
  const [image, setImage] = useState('')
  const [gametype, setGameType] = useState('')
  let { id } = useParams()


  const getData = async () => {
    // console.log("We got clicked");
    const data = await fetch("/games/" + id);
    // console.log("DATA inital from backed", data);

    const cleanData = await data.json();
    // console.log("STUFF FROM BACKNED!!", cleanData);
    setName(cleanData.gamename)
    setGenre(cleanData.genre)
    setDescribe(cleanData.description)
    setImage(cleanData.image)
    setGameType(cleanData.gametype)
    setState(cleanData);
  };


  useEffect(() => {
    getData();
  }, []);

  const editGame = async () => {

    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        gamename: name,
        genre: genre,
        description: describe,
        pic: image,
        gametype: gametype,
      })
    }

    // fetch !!
    const data = await fetch("/games/" + id, requestOptions);
    console.log('Data!!! from edit', data)
  }


  return (
    <>
      <div>
        <h1>Edit the game below</h1>
      </div>
      <div className="formContainer">
        <p style={{ textAlign: 'left' }}>Name of Game</p>
        <input defaultValue={state.gamename} style={{ display: 'block' }} onChange={(e) => setName(e.target.value)} />
        <p style={{ textAlign: 'left' }}>Game Image</p>
        <input defaultValue={state.pic} style={{ display: 'block' }} onChange={(e) => setImage(e.target.value)} />
        <p style={{ textAlign: 'left' }}>Game Genre</p>
        <input defaultValue={state.genre} style={{ display: 'block' }} onChange={(e) => setGenre(e.target.value)} />
        <p style={{ textAlign: 'left' }}>Game Type</p>
        <input defaultValue={state.gametype} style={{ display: 'block' }} onChange={(e) => setGameType(e.target.value)} />
        <p style={{ textAlign: 'left' }}>Game Description</p>
        <textarea defaultValue={state.description} style={{ display: 'block' }} onChange={(e) => setDescribe(e.target.value)} ></textarea>
        <button onClick={editGame} className="btn btn-primary">
          Update
        </button>

      </div >
    </>
  );
}

export default ViewsEdit;