import * as React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import citiesActions from "../redux/actions/citiesAction";
import itinerariesAction from "../redux/actions/itinerariesAction";
import Itineraries from "./itineraries";
import NoItinerary from "./noItinerary";
import activitiesAction from "../redux/actions/activitiesAction"

function CardsDetalle(props) {
  const { id } = useParams();
  const [card, setCard] = useState({
    element: props.cities.find((i) => i._id.toString() === id.toString()),
  });

  useEffect(() => {
    if (props.cities.length < 1) {
      props
        .fetchearUnaCiudad(id)
        .then((traerId) => setCard({ element: traerId }));
    }
    window.scrollTo(0, 0);
    props.filterItinerarieForCity(id);
  }, []);
  if (!card.element) {
    return <h1>Loading..</h1>;
  }

  return (
    <div className="cardsDetalle">
      <div className="cardsid">
        <img className="imageDetaillCard" src={card.element.image} />
        <h1>
          {card.element.name} ,{card.element.country}
        </h1>
        <div>{card.element.description}</div>
      </div>

      <div className="divAccordion">
        <Itineraries itinerary={props.itineraries} />
      </div>
      {/* <div>
        <NoItinerary noItinerary={props.itineraries.length ? true : false} />
      </div> */}
    </div>
  );
}
const mapDispatchToProps = {
  fetchearCities: citiesActions.fetchearCities,
  filtrarCities: citiesActions.filtrarCities,
  filterItinerarieForCity: itinerariesAction.filterItinerarieForCity,
  fetchearUnaCiudad: citiesActions.fetchearUnaCiudad,
};

const mapStateToProps = (state) => {
  return {
    cities: state.citiesReducer.cities,
    auxiliar: state.citiesReducer.auxiliar,
    itineraries: state.itinerariesReducer.itineraries,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardsDetalle);
