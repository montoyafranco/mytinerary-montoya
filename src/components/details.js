import * as React from 'react';
import {useParams} from 'react-router-dom'
import { useEffect,useState } from "react";
import axios from "axios"
import {connect} from "react-redux";
import citiesActions from "../redux/actions/citiesAction";



 function CardsDetalle(props) {
    const {id} = useParams()
    const [card, setCard] = useState({element:props.cities.find((i)=>i._id.toString()===id.toString())})


    

    useEffect(()=>{
      if (props.cities.lenght<1){
        props.fetchearUnaCiudad(id)
        .then ((traerId)=>setCard({element:traerId}))
      }
  
    },[])
    if (!card.element){
      return (<h1>Loading..</h1>)
    }

  return (

    <div className= "cardsDetalle">
        <img className='divImgDetalle' src="https://sismo.app/wp-content/uploads/2019/02/under-construction-gif-11.gif" width={800} alt='img'></img>
    
        <div  className='cardsid'>
        <img className="imagenes" src={card.element.image}/>
         {card.element.name}
         <div>
         {card.element.description}
         </div>

        </div>
    
    </div>
  )
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

export default connect(mapStateToProps, mapDispatchToProps)(CardsDetalle)