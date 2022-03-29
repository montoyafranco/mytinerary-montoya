const User = require("../models/users");
const bcryptjs = require("bcryptjs");
const crypto = require("crypto"); //NPM CRYPTO
const nodemailer = require("nodemailer"); //NPM NODEMAILER
const jwt = require("jsonwebtoken");

const sendEmail = async (email, uniqueString) => {
  //FUNCION ENCARGADA DE ENVIAR EL EMAIL

  const transporter = nodemailer.createTransport({
    //DEFINIMOS EL TRASPORTE UTILIZANDO NODEMAILER
    host: "smtp.gmail.com", //DEFINIMOS LO PARAMETROS NECESARIOS
    port: 465,
    secure: true,
    auth: {
      user: "testingagus98@gmail.com", //DEFINIMOS LOS DATOS DE AUTORIZACION DE NUESTRO PROVEEDOR DE
      pass: "agus@3434", //COREO ELECTRONICO, CONFIGURAR CUAENTAS PARA PERMIR EL USO DE APPS
    }, //CONFIGURACIONES DE GMAIL
  });

  // EN ESTA SECCION LOS PARAMETROS DEL MAIL
  let sender = "testingagus98@gmail.com";
  let mailOptions = {
    from: sender, //DE QUIEN
    to: email, //A QUIEN
    subject: "Verificacion de email usuario ", //EL ASUNTO Y EN HTML EL TEMPLATE PARA EL CUERPO DE EMAIL Y EL LINK DE VERIFICACION
    html: `
        <div >
        <h1 style="color:red">Click on <a href=https://mytinerary-montoya.herokuapp.com/api/verify/${uniqueString}>aqui</a> to confirm your account </h1>
        </div>
        `,
  };
  await transporter.sendMail(mailOptions, function (error, response) {
    //SE REALIZA EL ENVIO
    if (error) {
      console.log(error);
    } else {
      console.log("Mensaje enviado");
    }
  });
};

const usersControllers = {
  verifyEmail: async (req, res) => {
    const { uniqueString } = req.params; //EXTRAE EL EL STRING UNICO DEL LINK

    const user = await User.findOne({ uniqueString: uniqueString });
    console.log(user); //BUSCA AL USUARIO CORRESPONDIENTE AL LINK
    if (user) {
      user.emailVerificado = true; //COLOCA EL CAMPO emailVerified en true
      await user.save();
      res.redirect("http://localhost:3000/signIn"); //REDIRECCIONA AL USUARIO A UNA RUTA DEFINIDA
      //return  res.json({success:true, response:"Su email se ha verificado correctamente"})
    } else {
      res.json({ success: false, response: "Your email its not verified" });
    }
  },

  signUpUsers: async (req, res) => {
    console.log(req.body);
    let {
      firstName,
      lastName,
      email,
      password,
      photoURL,
      chooseCountry,
      from,
     } = req.body.userData;
    const test = req.body.test;

    try {
      const usuarioExiste = await User.findOne({ email }); //BUSCAR SI EL USUARIO YA EXISTE EN DB

      if (usuarioExiste) {
        console.log(usuarioExiste.from.indexOf(from));
        if (usuarioExiste.from.indexOf(from) !== -1) {
          console.log(
            "resultado de if " + (usuarioExiste.from.indexOf(from) !== 0)
          ); //INDEXOF = 0 EL VALOR EXISTE EN EL INDICE EQ A TRUE -1 NO EXITE EQ A FALSE
          res.json({
            success: false,
            from: "signup",
            message:
              "You have already registered this way",
          });
        } else {
          const contraseñaHasheada = bcryptjs.hashSync(password, 10);

          usuarioExiste.from.push(from);
          usuarioExiste.password.push(contraseñaHasheada);
          if (from === "form-Signup") {
            //PORSTERIORMENTE AGREGAREMOS LA VERIFICACION DE EMAIL
            usuarioExiste.uniqueString = crypto.randomBytes(15).toString("hex");
            await usuarioExiste.save();

            await sendEmail(email, usuarioExiste.uniqueString); //LLAMA A LA FUNCION ENCARGADA DEL ENVIO DEL CORREO ELECTRONICO
            res.json({
              success: true,
              from: "signup",
              message:
                "We send you an email .Please check your email and validate your account ",
            });
          } else {
            usuarioExiste.save();

            res.json({
              success: true,
              from: "signup",
              message:
                "Added " + from + " to your signIn methods",
            });
          }
        }
      } else {
        //SI EL USUARIO NO ESXITE

        const contraseñaHasheada = bcryptjs.hashSync(password, 10); //LO CREA Y ENCRIPTA LA CONTRASEÑA

        // CREA UN NUEVO OBJETO DE PERSONAS CON SU USUARIO Y CONTRASEÑA (YA ENCRIPTADA)
        const nuevoUsuario = await new User({
          firstName,
          lastName,
          email,
          emailVerificado: false,
          password: [contraseñaHasheada],
          photoURL,
          chooseCountry,
          from: [from],
          uniqueString: crypto.randomBytes(15).toString("hex"),
        });

        //SE LO ASIGNA AL USUARIO NUEVO
        if (from !== "form-Signup") {
          //SI LA PETICION PROVIENE DE CUENTA GOOGLE
          await nuevoUsuario.save();
          res.json({
            success: true,
            from: "signup",
            message: "Your username has been created with " + from,
          }); // AGREGAMOS MENSAJE DE VERIFICACION
        } else {
          //PASAR EMAIL VERIFICADO A FALSE
          //ENVIARLE EL E MAIL PARA VERIFICAR
          await nuevoUsuario.save();
          await sendEmail(email, nuevoUsuario.uniqueString); //LLAMA A LA FUNCION ENCARGADA DEL ENVIO DEL CORREO ELECTRONICO

          res.json({
            success: true,
            from: "signup",
            message:
              "An email has been sended.Check you email ",
          }); // AGREGAMOS MENSAJE DE VERIFICACION
        }
      }
    } catch (error) {
      console.log(error);
      res.json({
        success: false,
        message: "Something went wrong.Try again later",
      }); //CAPTURA EL ERROR
    }
  },

  signInUser: async (req, res) => {
    const { email, password, from } = req.body.logedUser;
    try {
      const usuarioExiste = await User.findOne({ email });

      //METODO PARA BUSCAR PASSWORD MEDIANTE FROM
      
      // const indexpass = usuarioExiste.from.indexOf(from);
      // console.log(usuarioExiste.password[indexpass]);

      if (!usuarioExiste) {
        // PRIMERO VERIFICA QUE EL USUARIO EXISTA
        res.json({
          success: false,
          message: "Your username its not regestered.Please sign up",
        });
      } else {
        if (from !== "form-Signup") {
          let contraseñaCoincide = usuarioExiste.password.filter((pass) =>
            bcryptjs.compareSync(password, pass)
          );

          if (contraseñaCoincide.length > 0) {

            const userData = {
              id: usuarioExiste._id,
              firstName: usuarioExiste.firstName,
              email: usuarioExiste.email,
              photoURL: usuarioExiste.photoURL,
              from: from,
            };
            await usuarioExiste.save();

            const token = jwt.sign({ ...userData }, process.env.SECRET_KEY, {
              expiresIn: 60 * 60 * 24,
            });

            res.json({
              success: true,
              from: from,
              response: { token, userData },
              message: "Welcome back " + userData.firstName,
            });
          } else {
            res.json({
              success: false,
              from: from,
              message:
                "You did not registered with " +
                from +
                "if you want to sign in , first you need to SignUp with " +
                from,
            });
          }
        } else {
          if (usuarioExiste.emailVerificado) {
            let contraseñaCoincide = usuarioExiste.password.filter((pass) =>
              bcryptjs.compareSync(password, pass)
            );
            console.log(contraseñaCoincide);
            console.log(
              "resultado de busqueda de contrasela: " +
                (contraseñaCoincide.length > 0)
            );
            if (contraseñaCoincide.length > 0) {
              const userData = {
                id: usuarioExiste._id,
                firstName: usuarioExiste.firstName,
                email: usuarioExiste.email,
                photoURL: usuarioExiste.photoURL,
                from: from,
              };
              const token = jwt.sign({ ...userData }, process.env.SECRET_KEY, {
                expiresIn: 60 * 60 * 24,
              });
              res.json({
                success: true,
                from: from,
                response: { token, userData },
                message: "Welcome back " + userData.firstName,
              });
            } else {
              res.json({
                success: false,
                from: from,
                message: "the user or password is wrong",
              });
            }
          } else {
            res.json({
              success: false,
              from: from,
              message:
                "Your email it is not validated.Please check your mail to activate the account",
            });
          }
        } //SI NO ESTA VERIFICADO
      }
    } catch (error) {
      console.log(error);
      res.json({
        success: false,
        message: "Something went wrong !!!!!!!",
      });
    }
  },
  signOutUser: async (req, res) => {
    const email = req.body.closeuser;
    const user = await User.findOne({ email });
    // await user.save();
    res.json(console.log("Session closed" + email));
  },

  verificarToken: (req, res) => {
    console.log(req.user);
    if (!req.err) { //si es false nos va a dar una respuesta
      res.json({
        success: true,
        response: {
          id: req.user.id,
          firstName: req.user.firstName,
          lastName: req.user.lastName,
          email: req.user.email,
          photoURL: req.user.photoURL,
          from: "token",
        },
        message: "Wellcome back " + req.user.firstName,
      });
    } else {
      res.json({
        success: false,
        message: "Please, try to sign in again",
      });
    }
  },
};
module.exports = usersControllers;