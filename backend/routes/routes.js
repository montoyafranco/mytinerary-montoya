const passport = require('../config/passport')
const Router = require("express").Router();
const validator = require('../config/validator')


const ciudadesController = require("../contollers/ciudadesControllers");

const { obtenerCiudades, cargarCiudad, borrarCiudad, modificarCiudad,obtenerUnaCiudad } =
  ciudadesController;

Router.route("/allcities")
  .get(obtenerCiudades)

  .post(cargarCiudad);

Router.route("/allcities/:id")
.delete(borrarCiudad)
.put(modificarCiudad)
.get(obtenerUnaCiudad);
module.exports = Router;



const itinerariesController = require('../contollers/itinerariesControllers')
const {obtenerItineraries, obtenerUnItinerario, cargarItinerario, borrarItinerario, modificarItinerario,obtenerItinerarioPorIdCiudad,likeDislike} = itinerariesController

Router.route('/allitineraries')
.get(obtenerItineraries)
.post(cargarItinerario)


Router.route('/allitineraries/:id')
.delete(borrarItinerario)
.put(modificarItinerario)
.get(obtenerUnItinerario)

Router.route('/allitineraries/ciudad/:id')
.get(obtenerItinerarioPorIdCiudad)

const usersControllers = require('../contollers/usersControllers');
const {signUpUsers, signInUser, signOutUser,verifyEmail,verificarToken}= usersControllers

Router.route('/auth/signup')
.post(validator,signUpUsers)

Router.route('/auth/signin')
.post(signInUser)

Router.route('/auth/signout')
.post(signOutUser)

Router.route('/verify/:uniqueString') //RECIBE EL LINK DE USUARIO
.get(verifyEmail) //LLAMA A FUNCION DE VERIFICACIIOn
Router.route('/auth/signInToken')
.get(passport.authenticate('jwt',{ session:false }), verificarToken)

const activitiesControllers  = require('../contollers/activitiesControllers')
const {obtenerActivities,obtenerUnActivities,cargarActivities,borrarActivities, modificarActivities,obtenerActividadporItinerary} = activitiesControllers
Router.route('/allactivities')
.get(obtenerActivities)
.post(cargarActivities)


Router.route('/allactivities/:id')
.delete(borrarActivities)
.put(modificarActivities)
.get(obtenerUnActivities)

Router.route('/allactivities/itinerary/:id')
.get(obtenerActividadporItinerary)

Router.route('/likesDislike/:id')
.put(passport.authenticate("jwt", { session: false }), likeDislike)


module.exports = Router  