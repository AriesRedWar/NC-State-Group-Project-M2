import { useState } from "react";
const React = require("react");
// import Form from 'react-bootstrap/Form';


function GrabData() {
  const [state, setState] = useState([]);

  const getData = async () => {
    console.log("We got clicked");
    const data = await fetch("/games");
    console.log("DATA inital from backed", data);
    const cleanData = await data.json();
    console.log("STUFF FROM BACKNED!!", cleanData);
    setState(cleanData);
  };
  console.log("State !!!!!!!!!", state);

  return (
    <div>
      <button onClick={getData}>Let's see!</button>
      {state.map((eachThing) => {
        return <h1>{eachThing._id}</h1>;
      })}
    </div>
  );
}

export default GrabData;


// export default function Game() {
//     return (
//         <>
//             <div className="GamePage">
//                 <h1>Find the best games to play</h1>
//             </div>
//             <div>
//                 <Form.Label>Rating</Form.Label>
//                 <Form.Select defaultValue="Choose...">
//                     <option>Rate the Game</option>
//                     <option>⭐️</option>
//                     <option>⭐️⭐️</option>
//                     <option>⭐️⭐️⭐️</option>
//                     <option>⭐️⭐️⭐️⭐️</option>
//                     <option>⭐️⭐️⭐️⭐️⭐️</option>
//                 </Form.Select>
// 
//             </div>
//         </>
//     )}
