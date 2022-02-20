import Carrousel1 from "../components/carrousel1";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="divItinerary">
        <p className="pDiv">Mytinerary</p>
        <p className="pDiv">
          "Find your perfect trip, designed by insiders who know and love their
          cities!
        </p>
      </div>
      <div className="wave">
        <p className="pWave">
          Explore the beauty of Japan - Start your adventure here
        </p>
        <button className="buttonWave">Cities</button>
      </div>

      <Carrousel1 />
    </div>
  );
}

export default Home;
