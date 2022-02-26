const mongoose = require('mongoose')
const ciudadesSchema = new mongoose.Schema({
    name:{type:String,required:true},
    pais:{type:String,required:true},
    description:{type:String,required:true},
    image:{type:String,required:true}

})

const Ciudades = mongoose.model('ciudades', ciudadesSchema)
module.exports= Ciudades