import Form from 'react-bootstrap/Form';
const React = require("react");

export default function Game() {
    return (
        <>
            <div className="GamePage">
                <h1>Find the best games to play</h1>
            </div>
            <div>
                <Form.Label>Rating</Form.Label>
                <Form.Select defaultValue="Choose...">
                    <option>Rate the Game</option>
                    <option>⭐️</option>
                    <option>⭐️⭐️</option>
                    <option>⭐️⭐️⭐️</option>
                    <option>⭐️⭐️⭐️⭐️</option>
                    <option>⭐️⭐️⭐️⭐️⭐️</option>
                </Form.Select>

            </div>
        </>
    )

}