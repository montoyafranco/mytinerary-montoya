import React from "react";
import FacebookLogin from "react-facebook-login";
import { connect } from "react-redux";
import userActions from "../../redux/actions/userActions";

function FacebookSignUp(props) {

  const responseFacebook = async (res) => {

    const fullName = res.name.split(" ")
    console.log(res)
    console.log(res.name)
    const userData = {
      firstName: fullName[0],
      lastName: fullName[1],
      email: res.email,
      password: res.id,
      photoURL: res.picture.data.url,
      chooseCountry: props.paises,
      from: "facebook"
    }

    await props.signUpUser(userData)
  }

  return (
    <FacebookLogin
    cssClass="buttonsocial my-facebook-button-class"
    icon="fa-facebook"
    textButton=" SignUp with Facebook"
      appId="1416963508753851"
      autoLoad={false}
      fields="name,email,picture"
      callback={responseFacebook}
    />
  );
}
const mapDispatchToProps = {
  signUpUser: userActions.signUpUser,

}

export default connect(null, mapDispatchToProps)(FacebookSignUp);
