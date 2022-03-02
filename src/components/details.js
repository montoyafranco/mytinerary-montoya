import * as React from 'react';
import {useParams} from 'react-router-dom'
import { useEffect,useState } from "react";
import axios from "axios"



export default function CardsDetalle() {
    const {id} = useParams()


    const [data, setData] = useState()

    useEffect(()=>{
    axios.get("http://localhost:4000/api/allcities")
    .then(response=>setData(response.data.response.ciudades.filter(cities => cities._id === id)))
  },[])

  return (

    <div className= "cardsDetalle">
        <img className='divImgDetalle' src="https://sismo.app/wp-content/uploads/2019/02/under-construction-gif-11.gif" width={800} alt='img'></img>
    {data?.map(evento=>
        <div  className='cardsid'>
        <img className="imagenes" src={evento.image}/>
         {evento.name}
         <div>
         {evento.description}
         </div>

      </div>
    )}
    </div>
  )
}