const Router = require("express").Router();

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
const {obtenerItineraries, obtenerUnItinerario, cargarItinerario, borrarItinerario, modificarItinerario} = itinerariesController

Router.route('/allitineraries')
.get(obtenerItineraries)
.post(cargarItinerario)


Router.route('/allitineraries/:id')
.delete(borrarItinerario)
.put(modificarItinerario)
.get(obtenerUnItinerario)


module.exports = Router