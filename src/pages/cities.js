import React from "react";
import MediaCard from "../components/card";
import { useEffect, useState } from "react";
import axios from "axios";

function Cities() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [input, setInput] = useState();
  const [apidata, setApiData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/allcities")
      .then((respuesta) => setApiData(respuesta.data.response.ciudades));
  }, []);

  function filterCards(event) {
    setInput(
      apidata.filter((city) =>
        city.name
          .toLowerCase()
          .startsWith(event.target.value.toLowerCase().trim())
      )
    );
  }
  return (
    <div className="citiesDiv">
      <div className="backgroundCities">
        <div class="box">
          <div class="input-wrapper">
            <input
              onKeyUp={filterCards}
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
          <MediaCard search={input} />
        </div>
      </div>
    </div>
  );
}
export default Cities;
