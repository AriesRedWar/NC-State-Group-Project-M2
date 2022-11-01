import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import './css/addgame.css'
import { useNavigate } from 'react-router-dom';



function AddGame() {
    //create states
    const [name, setName] = useState('')
    const [genre, setGenre] = useState('')
    const [describe, setDescribe] = useState('')
    const [image, setImage] = useState('')
    const [gametype, setGameType] = useState('')
    const navigate = useNavigate();


    const handleSave = async () => {
        console.log('We got clicked!')
        window.location.reload(false);
        navigate("/game");
        // const data = await fetch('/games')
        //         console.log('DATA inital from backed', data)

        //         const cleanData = await data.json()
        // console.log('STUFF FROM BACKNED!!', cleanData)

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                gamename: name,
                genre: genre,
                description: describe,
                pic: image,
                gametype: gametype,
            })
        };
        const data = await fetch('/games', requestOptions)
        const cleanData = await data.json()
        console.log('we just saved this ', cleanData)
    }

    return (
        <>

            <div className='intro'>
                <h2>Do you have a game to share? </h2>
                <h3>Add your game below!</h3>
            </div>

            <div className="formContainer">
                <h5 style={{ textAlign: 'left' }}>Name of Game</h5>
                <input onChange={(e) => { setName(e.target.value) }} style={{ display: 'block' }} ></input>
                <h5 style={{ textAlign: 'left' }}>Game Image</h5>
                <input type="url" onChange={(e) => { setImage(e.target.value) }} style={{ display: 'block' }}></input>
                <h5 style={{ textAlign: 'left' }}>Game Genre</h5>
                <input onChange={(e) => { setGenre(e.target.value) }} style={{ display: 'block' }}></input>
                <h5 style={{ textAlign: 'left' }}>Game Type</h5>
                <input onChange={(e) => { setGameType(e.target.value) }} style={{ display: 'block' }}></input>
                <h5 style={{ textAlign: 'left' }}>Game Description</h5>
                <textarea onChange={(e) => { setDescribe(e.target.value) }} style={{ display: 'block' }}></textarea>
            </div>

            <div className='button'>

                <Button onClick={handleSave} type="submit" variant="secondary" size="lg">
                    Submit
                </Button>


                {/* Link to home page */}
                <Button type="submit" variant="secondary" size="lg">
                    Cancel
                </Button>
                {/* navigate('/game'); */}
            </div>

        </>

    )
}

export default AddGame
