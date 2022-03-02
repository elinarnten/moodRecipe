import angry from "../assets/angry.png";
import { Link } from "react-router-dom";
import pizza from "../assets/angry-pizza.jpg";
import milkshake from "../assets/angry-milkshake.jpg";
import candy from "../assets/angry-candy.jpg";
import "./moodView.css";
import { useEffect, useState } from "react";

function Angry() {
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
          <img src={angry} alt="angryEmoji" />
          <h1>You feel Angry!</h1>
        </div>

        <div className="mainContent">
          <div className="foodContent">
            <div className="foodBlock">
              <div>
                <h2>Food that matches your mood:</h2>
              </div>
              <div>
                <div id="text">
                  <h3>Pizza</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
                <img src={pizza} alt="pizza" />
              </div>
              <div>
                <div id="text">
                  <h3>Milkshake</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
                <img src={milkshake} alt="milkshake" />
              </div>
              <div>
                <div id="text">
                  <h3>Candy</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
                <img src={candy} alt="candy" />
              </div>
            </div>
          </div>

          <div className="movieContent">
            <div className="movieBlock">
              <div>
                <h2>Movies that matches your mood:</h2>
              </div>
              {movieData.map((item: any, index) => {
                if (index >= 3) return null;
                if ((item.genre_ids = 27))
                  return (
                    <div key={item.id}>
                      <img
                        src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
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

export default Angry;
