import intern from "../assets/theIntern.jpg";
import holiday from "../assets/theholiday_cover.jpg";
import enchanto from "../assets/enchanto_cover.jpg";
import sad from "../assets/sad.png";
import icecream from "../assets/sad-ice-cream.jpg";
import popcorn from "../assets/sad-popcorn.jpg";
import donut from "../assets/sad-donut.jpg";
import "./moodView.css";
import { Link } from "react-router-dom";

function Sad() {
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

export default Sad;
