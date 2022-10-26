import {useState} from 'react';


function GrabDataTest() {
    const [state, setState] = useState([])

    const getData = async () => {
        console.log('We got clicked!!')
        const data = await fetch("/game")
        console.log('data label hahaha!', data)
        const cleanData = await data.json()
        console.log('clean data', cleanData)
        setState(cleanData)
    }
    console.log('State !!!!!!!!!', state)

    return(

        <div>
            <p></p>
            <button onClick={getData}>Grab Blog Posts!</button>
            <p></p>
            {state.map((eachThing)=> {
                return (
                    <h1>{eachThing.gamename}</h1>
                )
            })}
        
        </div>
    );

}
export default GrabDataTest;