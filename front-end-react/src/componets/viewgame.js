import React from 'react';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

function Views(props) {
    return (
        <div>
            {props.games.map(() => {
                return (
                    <h1>Hello</h1>

                )
            })}
        </div>
    )
}

export default Views;







// import { useState } from 'react'



// function GrabData() {
//     const [state, setState] = useState([])

//     const getData = async () => {
//         console.log('We got clicked')
//         const data = await fetch('/games')
//         console.log('DATA inital from backed', data)

//         const cleanData = await data.json()
//         console.log('STUFF FROM BACKNED!!', cleanData)
//         setState(cleanData)
//     }

//     console.log('State', state)

//     return (
//         <div>
//             <button onClick={getData}>Let's see!</button>
//             {state.map((gameEntry) => {
//                 return (
//                     <h2>{gameEntry}</h2>
//                 )
//             })}
//         </div>
//     )
// }

// export default GrabData




{/* <div>
                <Form.Label>Rating</Form.Label>
                <Form.Select defaultValue="Choose...">
                    <option>Rate the Game</option>
                    <option>⭐️</option>
                    <option>⭐️⭐️</option>
                    <option>⭐️⭐️⭐️</option>
                    <option>⭐️⭐️⭐️⭐️</option>
                    <option>⭐️⭐️⭐️⭐️⭐️</option>
                </Form.Select>
                <button> Click Me </button>
            </div> */}