import React from "react";
import MediaCard from "../components/card";
import { useEffect,useState } from "react";
import axios from "axios"

function Cities() {
  const [apiCiudades, setApiCiudades ]= useState([])

  useEffect(()=>{



    axios.get("http://localhost:4000/api/allcities")
    .then(respuesta=>console.log(respuesta.data.response.ciudades))


  },[])



  return (
    <div className="citiesDiv">
      <div className="backgroundCities">
        <div class="box">
          <div class="input-wrapper">
            <input
              type="text"
              id="input"
              class="form-control"
              placeholder="Full Name"
            />
            <label for="input" class="control-label">
              Full name
            </label>
          </div>
        </div>
      </div>
      <div className="MediaCartCities">
        <div className="Cards2">
          <MediaCard />
        </div>
        <div className="Cards2">
          <MediaCard />
        </div>
        <div className="Cards2">
          <MediaCard />
        </div>
        <div className="Cards2">
          <MediaCard />
        </div>
        <div className="Cards2">
          <MediaCard />
        </div>
        <div className="Cards2">
          <MediaCard />
        </div>
      </div>
    </div>
  );
}
export default Cities;
