import Carrousel1 from "../components/carrousel1";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link as LinkRouter } from "react-router-dom";


function Home() {
  return (
    <div>
      <div className="divItinerary">
        <p className="pDiv">Mytinerary</p>
        <p className="pDiv">
          "Find your perfect trip, designed by insiders who know and love their
          cities!
          <img src=""></img>
        </p>
      </div>
      <div className="wave">
        <p className="pWave">
          Explore the beauty in Asia - Start your adventure here
        </p>
        <LinkRouter to={"/cities"}>
          <button className="buttonWave">Cities</button>
        </LinkRouter>
        
      </div>

      <Carrousel1 />
    </div>
  );
}

export default Home;
