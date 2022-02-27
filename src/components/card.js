import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link as LinkRouter } from "react-router-dom";

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
 //hola
  return (
    <div className="MediaCartCities">
      {data?.length !== 0 ? (
        data?.map((evento) => (
          <Card className="Cards2" sx={{ maxWidth: 450 }}>
            <CardMedia
              component="img"
              height="500"
              alt="green iguana"
              img
              className="imagenescard"
              src={evento.image}
            />
            <div className="cardsdinamics1">
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {evento.name} {evento.country}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {evento.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </div>
          </Card>
        ))
      ) : (
        <h1>Ciudad no Encontrada</h1>
      )}
    </div>
  );
}
