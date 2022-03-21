import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";

import ActivitiesCard from "./activities"

import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import { connect } from "react-redux";
import itinerariesActions from "../redux/actions/itinerariesAction";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function Itineraries(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  if (!props.itinerary) {
    return <h2>loading</h2>;
  }

  console.log(props);

  // useEffect(()=>{

  //   props.fetchearItineraries()

  // },[])

  return (
    <div className="divHamburguesaDetail">
      {props.itineraries.length === 0 ? (
        <div>
          <div className="custom-notFound">
            <img className="custom-img-notFound" />
          </div>
          <p className="custom-p-notFound">No itineraries for the moment</p>
        </div>
      ) : (
        props.itineraries.map((itinerarie) => (
          <Card className="hamburguesa">
            <div className="divImgItinerary">
              <img className="imgItinerary" src={itinerarie.imageUser} alt="" />
              <div className="nameUser">
                <h4>{itinerarie.nameUser}</h4>
              </div>
              <h4 className="hashtags">Hashtags: #{itinerarie.hashtag}</h4>
            </div>
            <div>
              <h2>{itinerarie.event}</h2>
            </div>

            <CardContent>
              <Typography variant="body2" color="text.secondary">
                <h3>Duration⏲: {itinerarie.duration}Hs </h3>
                <h3>Likes:♥{itinerarie.likes}</h3>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <h3>Price: {"💸".repeat(parseInt(itinerarie.price))}</h3>
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                {expanded ? "" : "Read More"}
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph></Typography>
                <Typography paragraph></Typography>
                {/* <div className="contenedorImagenes">
                  <div>
                    <img className="imgItineraries" src="" />
                  </div>
                  <div>
                    <img className="imgItineraries" src="" />
                  </div>
                  <div>
                    <img className="imgItineraries" src="" />
                  </div>
                </div> */} <ActivitiesCard/>

                <ExpandMore
                  className="showmore"
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="Show more"
                >
                  Show less
                </ExpandMore>
              </CardContent>
            </Collapse>
          </Card>
        ))
      )}
    </div>
  );
}
const mapDispatchToProps = {
  fetchearItinerary: itinerariesActions.fetchearItinerary,
  fetchearActivity: itinerariesActions.fetchearActivity,
};

const mapStateToProps = (state) => {
  return {
    itineraries: state.itinerariesReducer.itineraries,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Itineraries);
