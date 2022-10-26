
// import Form from 'react-bootstrap/Form';
// const React = require("react");

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
//                 <button> Click Me </button>
//             </div>
//         </>
//     )

// }

function GrabData() {

    const getData = async () => {
        console.log('We got clicked')
        const data = await fetch('/games')
        console.log('DATA inital from backed', data)
        const cleanData = await data.json()
        console.log('STUFF FROM BACKNED!!', cleanData)
    }

    return (
        <div>
            <button onClick={getData}>Let's see!</button>
        </div>
    )
}

export default GrabData