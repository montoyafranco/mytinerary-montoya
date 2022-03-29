import React from "react";
import MediaCard from "../components/card";
import { useEffect, useState } from "react";
import axios from "axios";
import {connect} from "react-redux"
import citiesActions from "../redux/actions/citiesAction";

function Cities(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(()=>{
    props.fetchearCities()
 

  },[]) 

  function filterCards (event) {

    props.filtrarCities(props.cities, event.target.value)

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
              placeholder="Search cities"
            />
            <label for="input" class="control-label">
              Search cities
            </label>
          </div>
        </div>
      </div>
      <div className="MediaCartCities">
        <div className="Cards2">
          <MediaCard cities={props.filterCities} />
        </div>
      </div>
    </div>
  );
}
const mapDispatchToProps  ={
  fetchearCities:citiesActions.fetchearCities,
  filtrarCities:citiesActions. filtrarCities,

}

const mapStateToProps = (state) =>{
  return{
      cities:state.citiesReducer.cities,
      auxiliar: state.citiesReducer.auxiliar,
      filterCities:state.citiesReducer.filterCities
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cities);
