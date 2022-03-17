import React, { useState } from "react";
import "./signup.css";
import { connect } from "react-redux";
import userActions from "../../redux/actions/userActions";
import { useEffect } from "react";
import { Link as LinkRouter } from "react-router-dom";
import apiSelect from "../ApiSelect";
import FacebookSignUp from "./FacebookSignUp";

function SignUp(props) {

  const [paises, setPaises] = useState("select...");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  console.log(props);

  const handleSubmit = (event) => {
    event.preventDefault();

    const userData = {
      firstName: event.target[0].value,
      lastName: event.target[1].value,
      email: event.target[2].value,
      password: event.target[3].value,
      photoURL: event.target[4].value,
      chooseCountry: paises,
      from: "form-Signup",
    };

    props.signUpUser(userData);

  };
  
  console.log(props.message);

  function selectPaises(event) {
    setPaises(event.target.value);
  }

  return (
    <div>
      <div id="formIn">
      <div className="bodyFormUp">
      <div class="">
            <p>Welcome adventurer</p>
            <p>Create your account by filling the form below.</p>
          </div>

          <div class="input-container-select ic1Up">
        <select onChange={selectPaises} className="input-select" name="select">
          <option value="value" selected>
            Select your country
          </option>
          {apiSelect.map((countries) => {
            return (
              <option key={countries.name} value={countries.name}>
                {countries.name}
              </option>
            );
          })}
        </select>
      </div>
      {paises !== "select..." ? (
  
        <form onSubmit={handleSubmit} className="body-form">
          
          <div class="form">
            <div class="input-container ic1Up">
              <input id="firstname" class="input" type="text" placeholder=" " />
              <div class="cut"></div>
              <label for="firstname" class="placeholderSignUp">
                First name
              </label>
            </div>
            <div class="input-container ic1Up">
              <input id="lastname" class="input" type="text" placeholder=" " />
              <div class="cut"></div>
              <label for="lastname" class="placeholderSignUp">
                Last name
              </label>
            </div>
            <div class="input-container ic1Up">
              <input id="email" class="input" type="text" placeholder=" " />
              <div class="cut cut-short"></div>
              <label for="email" class="placeholderSignUp">
                Email
              </label>
            </div>
            <div class="input-container ic1Up">
              <input
                id="password"
                class="input"
                type="password"
                placeholder=" "
              />
              <div class="cut cut-short"></div>
              <label for="password" class="placeholderSignUp">
                Password
              </label>
            </div>
            <div class="input-container ic1Up">
              <input id="URL" class="input" type="text" placeholder=" " />
              <div class="cut cut-short"></div>
              <label for="URL" class="placeholderSignUp">
                URL profile picture
              </label>
            </div>

            <button type="text" class="submit">
              Create Account
            </button>
            <button type="text" class="submit2">
              Sign in with Google
            </button>
            <div className="custom-call-signIn">
              <p>
                Already have an account?
                <LinkRouter className="custom-call-signIn2" to={"/signin"}>
                  <p>Log in here</p>
                </LinkRouter>
              </p>
            </div>
          </div>
          <FacebookSignUp paises={paises} />
        </form>
      ) : (
        <h1>Select a country to continue</h1>
      )}
    </div>
    </div>
    </div>
  );
}

const mapDispatchToProps = {
  signUpUser: userActions.signUpUser,
};
const mapStateToProps = (state) => {
  return {
    snackbar: state.userReducer.snackbar,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);