const Router = require('express').Router()

const ciudadesController = require('../contollers/ciudadesControllers')
const {obtenerCiudades} = ciudadesController

Router.route('/allcities')
.get(obtenerCiudades)

module.exports = Router