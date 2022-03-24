const mongoose = require('mongoose')


const itinerariesSchema = new mongoose.Schema({
    city:{type:String,required:true},
    event:{type:String,required:true}, 
    imageUser:{type:String,required:true},
    nameUser:{type:String,required:true},
    price:{type:Number,required:true},
    duration:{type:Number,required:true},
    likes:{type:Array},
    hashtag:{type:String,required:true},
     
    comments:{type:Array,required:true},
    ciudad: {type: mongoose.Types.ObjectId,ref:'ciudades',required :true}
})


const Itineraries = mongoose.model('itineraries', itinerariesSchema)
module.exports= Itineraries 


