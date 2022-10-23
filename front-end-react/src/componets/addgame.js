import Form from 'react-bootstrap/Form';

function AddGame() {
    return (
        <>
            <Form>
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


                    <Form.Label>Rating</Form.Label>
                    <Form.Select defaultValue="Choose...">
                        <option>Rate the Game</option>
                        <option>1 star</option>
                        <option>2 stars</option>
                        <option>3 stars</option>
                        <option>4 stars</option>
                        <option>5 stars</option>
                    </Form.Select>
                </Form.Group >

            </Form >
        </>

    );
}

export default AddGame;