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
      <div className=" bodyFormUp">
        <div className="formUp">
          <div class="title">
            <p>Welcome </p>
            <p>Create your account here.</p>
          </div>

          <div class="input-containerUp ic1Up ">
            <select onChange={selectPaises} className="inputUp" name="select">
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
            <form onSubmit={handleSubmit}>
              <div class="formUp">
                <div class="input-container ic1Up">
                  <input
                    id="firstname"
                    class="input"
                    type="text"
                    placeholder=" "
                  />
                  <div class="cut"></div>
                  <label for="firstname" class="placeholderSignUp">
                    First name
                  </label>
                </div>
                <div class="input-container ic1Up">
                  <input
                    id="lastname"
                    class="input"
                    type="text"
                    placeholder=" "
                  />
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
                {/* <button type="text" class="submit2">
              Sign in with Google
            </button> */}

                <div className="custom-call-signIn">
                  <p className="callToActionSignup2">
                    Or use Facebook to register
                  </p>
                </div>
                <FacebookSignUp paises={paises} />
                <div className="custom-call-signIn">
                  <p className="callToActionSignup">
                    Do you already have an account?
                    <LinkRouter className="custom-call-signIn2" to={"/signin"}>
                      <p>Log in here</p>
                    </LinkRouter>
                  </p>
                </div>
              </div>
            </form>
          ) : (
            <h1 className="callToActionSignup">First step</h1>
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
