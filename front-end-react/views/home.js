const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>Home of the Games</h1>
                <div>
                    <img src="/Users/michaelmanley/NC-State-Group-Project-M2/front-end-react/public/images/hannah-rodrigo-mf_3yZnC6ug-unsplash.jpg" alt="Game logo" />
                    <div>
                    Photo by <a href="https://unsplash.com/@hannahrodrigo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Hannah Rodrigo</a> on <a href="https://unsplash.com/s/photos/games?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                    </div>
                </div>
                    <a href="/games">
                        <button classname="btn-primary">Games Page</button>
                    </a>
            </main>
        </Def>
    )
}

module.exports = home