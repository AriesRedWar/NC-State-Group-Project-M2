import './css/home.css'
const React = require("react");

function Home() {
  return (
    <div>
      <main>
        <h1 className="header">Home of the Games</h1>
        <div>
          <img className="page_image"
            src="./Game-2.png"
            alt="Game logo" />
        </div>
        <div>
          <div className='credit'>
            Photo by{" "}
            <a href="https://unsplash.com/@hannahrodrigo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Hannah Rodriguez
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
