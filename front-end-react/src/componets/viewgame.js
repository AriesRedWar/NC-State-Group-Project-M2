import { useState } from 'react'
import './css/viewgame.css'


function Views() {
    const [state, setState] = useState([])

    const getData = async () => {
        console.log('We got clicked')
        const data = await fetch('/games')
        console.log('DATA inital from backed', data)

        const cleanData = await data.json()
        console.log('STUFF FROM BACKNED!!', cleanData)
        setState(cleanData)
    }

    console.log('State', state)

    return (
        <div>
            <button onClick={getData}>Let's see!</button>
            {state.map((gameEntry) => {
                return (
                    <div className='container'>
                        <h3>{gameEntry.gamename}</h3>
                        <h5>{gameEntry.genre}</h5>
                        <p>{gameEntry.description}</p>
                    </div>

                )
            })}


        </div>
    )
}

export default Views







