import Carrousel1 from "../components/carrousel1";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Home() {
  return (
    <div >
      
        <div className="divItinerary">
          <p>
            "Find your perfect trip, designed by insiders who know and love
            their cities!
          </p>
        </div>

        <Carrousel1 />

        
      
    </div>
  );
}

export default Home;
