const React = require("react");

function Home() {
  return (
    <div>
      <main>
        <h1>Home of the Games</h1>
        <div>
          <img src="./Game-2.png" width="300" height="180" alt="Game logo" />
        </div>
        <div>
          <div>
            Photo by{" "}
            <a href="https://unsplash.com/@hannahrodrigo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Hannah Rodrigo
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/s/photos/games?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Unsplash
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
