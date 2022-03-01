import { CSSProperties } from "react";
import intern from "../assets/theIntern.jpg";
import holiday from "../assets/theholiday_cover.jpg";
import enchanto from "../assets/enchanto_cover.jpg";
import angry from "../assets/angry.png";
import { Link } from "react-router-dom";
import pizza from "../assets/angry-pizza.jpg";
import milkshake from "../assets/angry-milkshake.jpg";
import candy from "../assets/angry-candy.jpg";
import "./moodView.css";

function Angry() {
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
              <div>
                <img src={intern} alt="moviecover" />
                <div id="text">
                  <h3>The Intern</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
              <div>
                <img src={holiday} alt="moviecover" />
                <div id="text">
                  <h3>The Holiday</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
              <div>
                <img src={enchanto} alt="moviecover" />
                <div id="text">
                  <h3>Enchanto</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
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
