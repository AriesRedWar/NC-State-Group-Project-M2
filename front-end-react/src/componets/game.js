const React = require("react");

export default function Game(data) {
      let gamesFormatted = data.games.map((games, Game) => {
        return (
          <div key={1} className="col-sm-6">
            <h2>
              <a> {games.gamename}</a>
                </h2>
                <p className="text-center">{games.gamename}</p>
          </div>
        );
      });
      return (
          <main>
            <h1>games to Rant or Rave About</h1>
            <div className="row">{gamesFormatted}</div>
          </main>
      );
    }
