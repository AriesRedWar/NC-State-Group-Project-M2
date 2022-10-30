import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import './css/addgame.css'




function AddGame() {
    //create states
    const [name, setName] = useState('')
    const [genre, setGenre] = useState('')
    const [describe, setDescribe] = useState('')
    const [image, setImage] = useState('')
    const [gametype, setGameType] = useState('')


    const handleSave = async () => {
        console.log('We got clicked!')
            window.location.reload(false);          
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
                <p style={{ textAlign: 'left' }}>Name of Game</p>
                <input onChange={(e) => { setName(e.target.value) }} style={{ display: 'block' }} ></input>
                <p style={{ textAlign: 'left' }}>Game Image</p>
                <input type="url" onChange={(e) => { setImage(e.target.value) }} style={{ display: 'block' }}></input>
                <p style={{ textAlign: 'left' }}>Game Genre</p>
                <input onChange={(e) => { setGenre(e.target.value) }} style={{ display: 'block' }}></input>
                <p style={{ textAlign: 'left' }}>Game Type</p>
                <input onChange={(e) => { setGameType(e.target.value) }} style={{ display: 'block' }}></input>
                <p style={{ textAlign: 'left' }}>Game Description</p>
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
            </div>

        </>

    )
}

export default AddGame
