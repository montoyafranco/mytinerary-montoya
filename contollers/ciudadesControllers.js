const Ciudades = require("../models/ciudades");

const ciudadesController = {
  obtenerCiudades: async (req, res) => {
    let ciudades;
    let error;

    try {
      ciudades = await Ciudades.find();
    } catch (err) {
      error = err;
      console.log(error);
    }
    res.json({
      response: error ? "ERROR" : { ciudades },
      success: error ? false : true,
      error: error,
    });
  }, 
  cargarCiudad: async (req, res) => {
    console.log(req.body);
    const { name, image, country, description } = req.body.dataInput;
    new Ciudades({
      name: name,
      country: country,
      description: description,
      image: image,
    })  
      .save()
      .then((respuesta) => res.json({ respuesta }));
  }, 

  borrarCiudad: async (req, res) => {
    const id = req.params.id;

    await Ciudades.findOneAndDelete({ _id: id }).then((respuesta) => res.json({ respuesta }));
  },
  obtenerUnaCiudad: async (req, res)=>{
    const id =req.params.id
    console.log(req.params)

    let ciudad
    let error = null

    try{
        ciudad = await Ciudades.findOne({_id:id})
        console.log(ciudad)
    }catch(err){
        error = err
        console.log(error)
    }
    res.json({
        response: error ? 'ERROR' : ciudad, 
        success: error ? false : true,
        error: error
    })

},
  modificarCiudad: async (req, res) => {
    const id = req.params.id;
    const ciudad = req.body.dataInput;

    let ciudadb = await Ciudades.findOneAndUpdate({ _id: id }, ciudad).then(
      (respuesta) => res.json({ respuesta })
    );
    console.log(ciudadb);
  },
};
module.exports = ciudadesController;
