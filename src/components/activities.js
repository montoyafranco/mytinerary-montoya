import React from "react";
import activitiesAction from "../redux/actions/activitiesAction";
import{useEffect} from "react"
import { connect } from "react-redux";

function ActivitiesCard(props) {
  console.log(props)
  useEffect(()=>{

    props.fetchearUnaActivity(props.id)
    
},[])

  return (
    <div className="contenedorImagenes">
      {console.log(props.activitiesByItinerary)}
      {props.activitiesByItinerary?.map((evento)=> (
        <>
        {console.log(evento)}
        
      <div>
        <img className="imgItineraries" src={evento.imageactivity1} />
       <h2>{evento.tittle1}</h2> 
      </div>

      <div>
        <img className="imgItineraries" src={evento.imageactivity2} />
        <h2>{evento.tittle2}</h2>
      </div>
      <div>
        <img className="imgItineraries" src={evento.imageactivity3} />
        <h2>{evento.tittle3}</h2>
      </div>
      </> ))}
    </div>
  );
}

const mapDispatchToProps  ={

  fetchearUnaActivity:activitiesAction.fetchearUnaActivity,
  // fetchearActivity:activitiesActions.fetchearActivity,

}
const mapStateToProps = (state) =>{
  return{

    // activities:state.activitiesReducer.activities,
    // auxiliar: state.activitiesReducer.auxiliar,
    activitiesByItinerary: state.activitiesReducer.activitiesByItinerary
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivitiesCard)