import intern from "../assets/theIntern.jpg";
import holiday from "../assets/theholiday_cover.jpg";
import enchanto from "../assets/enchanto_cover.jpg";
import bored from "../assets/bored.png";
import { Link } from "react-router-dom";
import hamburger from "../assets/bored-hamburger.jpg";
import cookies from "../assets/bored-cookies.jpg";
import pancakes from "../assets/bored-pancakes.jpg";
import "./moodView.css";

function Bored() {
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

export default Bored;
