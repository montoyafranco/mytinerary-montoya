import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
// import { useParams } from "react-router-dom";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import ActivitiesCard from "./activities";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import activitiesAction from "../redux/actions/activitiesAction";
import { connect } from "react-redux";
import itinerariesActions from "../redux/actions/itinerariesAction";
import commentsActions from "../redux/actions/commentsActions";

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
  const [expanded, setExpanded] = useState(false);
  const [reload, setReload] = useState(false);
  const [inputText, setInputText] = useState();
  const [modifi, setModifi] = useState();
  const [itinerary, setItinerary] = useState();

  useEffect(() => {
    props.filterItinerarieForCity(props.id)
    // .then(response =>setItinerary(response))
  }, [reload]);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  if (!props.itinerary) {
    return <h2>loading</h2>;
  }


  async function likesOrDislikes(itinerario) {
    await props.likeDislike(itinerario);

    setReload(!reload);
  }
  async function cargarComentario(idItinerario) {
    console.log("props id", idItinerario);
    console.log("inputText", inputText);

    const commentData = {
      itinerary: idItinerario,
      comment: inputText,
    };

    await props
      .addComment(commentData)
      .then(
        (response) => setItinerary(response.data.response.nuevoComment),
        setInputText("")
      );
  }

  async function modificarComentario(event) {
    const commentData = {
      commentID: event.target.id,
      comment: modifi,
    };
    await props.modifiComment(commentData);
    setReload(!reload);
  }

  async function eliminarComentario(event) {
    await props.deleteComment(event.target.id);
    setReload(!reload);
  }

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
            {/* {console.log(itinerarie?.likes)} */}
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

                <div className="likeDislike">
                  {props.user ? (
                    <button
                      onClick={() => {
                        likesOrDislikes(itinerarie._id);
                      }}
                    >
                      {itinerarie?.likes.includes(props.user.id) ? (
                        <span
                          style={{ color: "red", fontSize: 30 }}
                          class="material-icons"
                        >
                          favorite
                        </span>
                      ) : (
                        <span style={{ fontSize: 30 }} class="material-icons">
                          favorite_border
                        </span>
                      )}
                    </button>
                  ) : (
                    <span style={{ fontSize: 30 }} class="material-icons">
                      favorite_border
                    </span>
                  )}

                  <h3 style={{ color: "black ", fontSize: 30 }}>
                    {itinerarie?.likes.length}
                  </h3>
                </div>

                <div></div>
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
                <ActivitiesCard id={itinerarie._id} />
                {/* {console.log(itinerarie._id)} */}
                <div className="accordion-body">
                  {console.log("itinerary?.comments", itinerary?.comments)}

                  {itinerary?.comments.map((comment) => (
                    <>
                    {console.log("Console log de coment linea 168",comment)}
                      {comment.userID?._id !== props.user?.id ? (
                        <div className="cartacoments" key={comment._id}>
                          <div className="card-header">
                            {comment.userID?.firstName}
                          </div>
                          <div className="card-body">
                            <p className="card-text">{comment.comment}</p>
                          </div>
                        </div>
                      ) : (
                        <div className="cartacoments">
                          <div className="card-header">
                            {comment.userID.firstName}
                          </div>
                          <div className="card-body ">
                            <textarea
                              type="text"
                              className="card-text textComments"
                              onChange={(event) =>
                                setModifi(event.target.value)
                              }
                              defaultValue={comment.comment}
                            />
                            <button
                              id={comment._id}
                              onClick={modificarComentario}
                              class="btn btn-primary"
                            >
                              Modificar
                            </button>
                            <button
                              id={comment._id}
                              onClick={eliminarComentario}
                              class="btn btn-primary"
                            >
                              Eliminar
                            </button>
                          </div>
                        </div>
                      )}
                    </>
                  ))}

                  {props.user ? (
                    <div className="">
                      <div className="card-header">DEJA TU COMENTARIO !</div>
                      <div className="card-body ">
                        <textarea
                          onChange={(event) => setInputText(event.target.value)}
                          className="card-text textComments"
                          value={inputText}
                        />
                        <button
                          onClick={() => cargarComentario(itinerarie._id)}
                          className="btn btn-primary"
                        >
                          Cargar
                        </button>
                      </div>
                    </div>
                  ) : (
                    <h1>Realiza singIn y dejanos tu comentario</h1>
                  )}
                </div>
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
  fetchearActivity: activitiesAction.fetchearActivity,
  likeDislike: itinerariesActions.likeDislike,
  filterItinerarieForCity: itinerariesActions.filterItinerarieForCity,
  addComment: commentsActions.addComment,
  modifiComment: commentsActions.modifiComment,
  deleteComment: commentsActions.deleteComment,
};

const mapStateToProps = (state) => {
  return {
    itineraries: state.itinerariesReducer.itineraries,
    user: state.userReducer.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Itineraries);
