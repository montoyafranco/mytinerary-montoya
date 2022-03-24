import React from "react";
import activitiesAction from "../redux/actions/activitiesAction";
import { useEffect } from "react";
import { connect } from "react-redux";

function ActivitiesCard(props) {
  console.log(props);
  useEffect(() => {
    props.fetchearUnaActivity(props.id);
  }, []);

  return (
    <div className="card-accordion1">
      {console.log(props.activitiesByItinerary)}
      {props.activitiesByItinerary?.map((evento) => (
        <>
          {console.log(evento)}

          <div className="card-accordion">
            <div className="items-card-accordion">
              <div className="containerimg-card">
                <img className="image-activities" src={evento.imageactivity1} />
                <div className="titulo-accordion">
                  <h2>{evento.tittle1}</h2>
                </div>
              </div>
            </div>
          </div>

          <div className="card-accordion">
            <div className="items-card-accordion">
              <div className="containerimg-card">
                <img className="image-activities" src={evento.imageactivity2} />
                <div className="titulo-accordion">
                  <h2>{evento.tittle2}</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="card-accordion">
            <div className="items-card-accordion">
              <div className="containerimg-card">
                <img className="image-activities" src={evento.imageactivity3} />
                <div className="titulo-accordion">
                  <h2>{evento.tittle3}</h2>
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}

const mapDispatchToProps = {
  fetchearUnaActivity: activitiesAction.fetchearUnaActivity,
  // fetchearActivity:activitiesActions.fetchearActivity,
};
const mapStateToProps = (state) => {
  return {
    // activities:state.activitiesReducer.activities,
    // auxiliar: state.activitiesReducer.auxiliar,
    activitiesByItinerary: state.activitiesReducer.activitiesByItinerary,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ActivitiesCard);
