import React from "react";
import MediaCard from "../components/card";

function Cities() {
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
