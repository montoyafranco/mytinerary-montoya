import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import axios from "axios";

export default function MediaCard(props) {
  const [data, setData] = useState();
  console.log(props.search);
  useEffect(() => {
    if (props.search === undefined) {
      axios
        .get("http://localhost:4000/api/allcities")
        .then((respuesta) => setData(respuesta.data.response.ciudades));
    } else {
      setData(props.search);
    }
  }, [props.search]);

  return (
    <div className="cardsninamics">
      <div className="titlecities">
        <p>Cities</p>
      </div>
      {data?.length !== 0 ? (
        data?.map((evento) => (
          <div className="cardsdinamics1">
            <img className="imagenescard" src={evento.image} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <div className="title-cardcities">
                  {evento.name}
                  {evento.country}
                  {evento.description}
                </div>
              </Typography>
            </CardContent>
          </div>
        ))
      ) : (
        <h1>Ciudad no Encontrada</h1>
      )}
    </div>
  );
}
