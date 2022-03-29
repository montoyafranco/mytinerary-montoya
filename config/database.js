const mongoose = require("mongoose")
 mongoose.connect(process.env.MONGO_URI,{


    useUnifiedTopology : true, //permite utilizar controladores que no van ser especificamente de mongo, controladores pesonalizados
    useNewUrlParser : true,



 })
 
 .then(()=>console.log("Database Connected"))
 .catch ( err =>console.error(err)) 