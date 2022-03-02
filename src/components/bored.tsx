import intern from "../assets/theIntern.jpg";
import holiday from "../assets/theholiday_cover.jpg";
import enchanto from "../assets/enchanto_cover.jpg";
import bored from "../assets/bored.png";
import { Link } from "react-router-dom";
import hamburger from "../assets/bored-hamburger.jpg";
import cookies from "../assets/bored-cookies.jpg";
import pancakes from "../assets/bored-pancakes.jpg";
import "./moodView.css";
import { useEffect, useState } from "react";

function Bored() {
  const [movieData, setMovieData] = useState<any[]>([]);

  const fetchData = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=656c9b3e8e475ff723ad264a23f043e6&language=en-US&page=1"
    )
      .then((response) => response.json())
      .then((data) => setMovieData(data.results));
  };
  console.log(movieData);

  useEffect(() => {
    fetchData();
  }, [setMovieData]);

  return (
    <div className="container">
      <div className="content">
        <div className="heading">
          <img src={bored} alt="boredEmoji" />
          <h1>You feel bored!</h1>
        </div>

        <div className="mainContent">
          <div className="foodContent">
            <div className="foodBlock">
              <div>
                <h2>Food that matches your mood:</h2>
              </div>
              <div>
                <div id="text">
                  <h3>Hamburger</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
                <img src={hamburger} alt="hamburger" />
              </div>
              <div>
                <div id="text">
                  <h3>Pancakes</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
                <img src={pancakes} alt="pancakes" />
              </div>
              <div>
                <div id="text">
                  <h3>Cookies</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
                <img src={cookies} alt="cookies" />
              </div>
            </div>
          </div>

          <div className="movieContent">
            <div className="movieBlock">
              <div>
                <h2>Movies that matches your mood:</h2>
              </div>

              {movieData.map((item: any, index) => {
                const genre = 12;
                if ((item.genre_ids = genre)) if (index >= 3) return null;
                return (
                  <div key={item.id}>
                    <img
                      src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    ></img>
                    <div id="text">
                      <h3>{item.title}</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <Link to={"/NewMoodQuestion"}>
          <button className="backButton">BACK!</button>
        </Link>
      </div>
    </div>
  );
}

export default Bored;
