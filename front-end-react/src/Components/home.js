import React from "react"
import NavBar from "./navbar"

function Home() {
    return (
        <div>
            <main>
                <h1>Home of the Games</h1>
                <NavBar />
                <div>
                    <img
                        src='/Game_2.jpg'
                        alt="Game logo"
                    />
                    <div>
                        Photo by <a href="https://unsplash.com/@hannahrodrigo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Hannah Rodrigo</a> on <a href="https://unsplash.com/s/photos/games?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                    </div>
                </div>
                <a href="/games">
                    <button classname="btn-primary">Games Page</button>
                </a>
            </main>
        </div>
    )
}

export default Home