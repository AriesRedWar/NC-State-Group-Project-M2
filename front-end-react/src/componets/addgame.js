import Form from 'react-bootstrap/Form';
import './css/addgame.css'

function AddGame() {
    return (
        <>
            <div className='intro'>
                <h3>Add your game below!</h3>
            </div>

            <div className="form_container">
                <Form className="container">
                    <Form.Group className="mb-3" controlId="formGroupName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="game" placeholder="Enter game name" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Game Type</Form.Label>
                        <Form.Select defaultValue="Choose...">
                            <option>Choose...</option>
                            <option>Board Game</option>
                            <option>Physical Game</option>
                            <option>Video Game</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupGenre">
                            <Form.Label>Game Genre</Form.Label>
                            <Form.Control type="gameGenre" placeholder="Enter game genre " />
                        </Form.Group>



                    </Form.Group >
                </Form >
            </div>
        </>
    );
}

export default AddGame;