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
const {obtenerItineraries, obtenerUnItinerario, cargarItinerario, borrarItinerario, modificarItinerario,obtenerItinerarioPorIdCiudad} = itinerariesController

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
const {signUpUsers, signInUser, signOutUser,verifyEmail}= usersControllers

Router.route('/auth/signup')
.post(validator,signUpUsers)

Router.route('/auth/signin')
.post(signInUser)

Router.route('/auth/signout')
.post(signOutUser)

Router.route('/verify/:uniqueString') //RECIBE EL LINK DE USUARIO
.get(verifyEmail) //LLAMA A FUNCION DE VERIFICACIIOn


module.exports = Router