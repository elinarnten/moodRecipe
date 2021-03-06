import happy from "../assets/happy.png";
import { Link } from "react-router-dom";
import chips from "../assets/happy-chips.jpg";
import pasta from "../assets/happy-pasta.jpg";
import cupcakes from "../assets/happy-cupcakes.jpg";
import "./moodView.css";
import { useEffect, useState } from "react";

function Happy() {
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

  const filteredMovieData = movieData.filter((item: any) =>
    item.genre_ids.includes(12)
  );

  return (
    <div className="container">
      <div className="content">
        <div className="heading">
          <img src={happy} alt="happyEmoji" />
          <h1>You feel happy!</h1>
        </div>

        <div className="mainContent">
          <div className="foodContent">
            <div className="foodBlock">
              <div>
                <h2>Food that matches your mood:</h2>
              </div>
              <div>
                <div id="text">
                  <h3>Pasta</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
                <img src={pasta} alt="pasta" />
              </div>
              <div>
                <div id="text">
                  <h3>Cupcakes</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
                <img src={cupcakes} alt="cupcakes" />
              </div>
              <div>
                <div id="text">
                  <h3>Chips</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
                <img src={chips} alt="chips" />
              </div>
            </div>
          </div>

          <div className="movieContent">
            <div className="movieBlock">
              <div>
                <h2>Movies that matches your mood:</h2>
              </div>
              {filteredMovieData.map((item: any, index) => {
                if (index >= 3) return null;
                return (
                  <div key={item.id}>
                    <img
                      src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                      alt="movie cover"
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

export default Happy;
