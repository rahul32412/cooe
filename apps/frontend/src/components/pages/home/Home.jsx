import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="amuse-box">
        <h2>amuse box</h2>
      </div>
      <div className="game-container">
        <div className="game">
          <div className="img">
            <img src="https://img.cooe.in/media/unnamed.webp" alt="" />
          </div>
          <div className="text">
            <h3 className="heading">Mario Kart Tour</h3>
            <p className="description">
              Challenge players worldwide in multiplayer! You can race against
              up to seven other players, whether they're registered as in-game
              friends
            </p>
            <div className="view-btn">
              <a href="/">View</a>
            </div>
          </div>
        </div>

        <div className="game">
          <div className="img">
            <img src="https://img.cooe.in/media/bts.webp" alt="" />
          </div>
          <div className="text">
            <h3 className="heading">Mario Kart Tour</h3>
            <div className="description">
              <p className="description">
                Challenge players worldwide in multiplayer! You can race against
                up to seven other players, whether they're registered as in-game
                friends
              </p>
            </div>
            <div className="view-btn">
              <a href="/">View</a>
            </div>
          </div>
        </div>

        <div className="game">
          <div className="img">
            <img src="https://img.cooe.in/media/unnamed_nx8P0yl.webp" alt="" />
          </div>
          <div className="text">
            <h3 className="heading">Mario Kart Tour</h3>
            <div className="description">
              <p className="description">
                Challenge players worldwide in multiplayer! You can race against
                up to seven other players, whether they're registered as in-game
                friends
              </p>
            </div>
            <div className="view-btn">
              <a href="/">View</a>
            </div>
          </div>
        </div>

        <div className="game">
          <div className="img">
            <img src="https://img.cooe.in/media/unnamed_gck4Dnp.webp" alt="" />
          </div>
          <div className="text">
            <h3 className="heading">Mario Kart Tour</h3>
            <div className="description">
              <p className="description">
                Challenge players worldwide in multiplayer! You can race against
                up to seven other players, whether they're registered as in-game
                friends
              </p>
            </div>
            <div className="view-btn">
              <a href="/">View</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
