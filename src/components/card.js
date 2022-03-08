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
import CityAlert from "./noCityAlert"


export default function MediaCard(props) {
  
  return (
    <div className="MediaCartCities">
      {props.cities?.length !== 0 ? (
        props.cities?.map((evento) => (
          <Card className="Cards2" sx={{ maxWidth: 450 }}>
            <CardMedia
              component="img"
              height="400"
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
              <LinkRouter to={`/details/${evento._id}`}>
              <CardActions>
                <Button size="small">Details</Button>
               
              </CardActions>
              </LinkRouter>
            </div>
          </Card>
        ))
      ) : (
        <div> <CityAlert/></div>
      )}
    </div>
  );
}
