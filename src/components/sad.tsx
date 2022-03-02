import sad from "../assets/sad.png";
import icecream from "../assets/sad-ice-cream.jpg";
import popcorn from "../assets/sad-popcorn.jpg";
import donut from "../assets/sad-donut.jpg";
import "./moodView.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Sad() {
  const [movieData, setMovieData] = useState<any[]>([]);

  const fetchData = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=656c9b3e8e475ff723ad264a23f043e6&language=en-US&page=1"
    )
      .then((response) => response.json())
      .then((data) => setMovieData(data.results));
  };

  useEffect(() => {
    fetchData();
  }, [setMovieData]);

  return (
    <div className="container">
      <div className="content">
        <div className="heading">
          <img src={sad} alt="sadEmoji" />
          <h1>You feel sad!</h1>
        </div>

        <div className="mainContent">
          <div className="foodContent">
            <div className="foodBlock">
              <div>
                <h2>Food that matches your mood:</h2>
              </div>
              <div>
                <div id="text">
                  <h3>Ice Cream</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
                <img src={icecream} alt="icecream" />
              </div>
              <div>
                <div id="text">
                  <h3>Donuts</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
                <img src={donut} alt="donut" />
              </div>
              <div>
                <div id="text">
                  <h3>Popcorn</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
                <img src={popcorn} alt="popcorn" />
              </div>
            </div>
          </div>

          <div className="movieContent">
            <div className="movieBlock">
              <div>
                <h2>Movies that matches your mood:</h2>
              </div>
              {movieData.map((item: any, idx: number) => {
                if (idx >= 6 && idx <= 8) {
                  return (
                    <div key={item.id}>
                      <img
                        src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                        alt="movie cover"
                      ></img>
                      <div id="text">
                        <h3>{item.title}</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                      </div>
                    </div>
                  );
                }
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

export default Sad;
