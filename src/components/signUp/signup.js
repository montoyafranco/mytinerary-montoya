import React from "react";
import "./signup.css";
import { connect } from 'react-redux';
import userActions from "../../redux/actions/userActions"

 function SignUp(props) {
  
    const handleSubmit = (event) => {
        event.preventDefault()
    

        const userData={
            firstName:event.target[0].value,
            lastName:event.target[1].value,
            email:event.target[2].value,
            password:event.target[3].value,
            photoURL:event.target[4].value,
            chooseCountry:event.target[5].value,
            
            from:"form-Signup"
        }
        props.signUpUser(userData)
        console.log(userData)
        console.log(props.message)
        
    }
    // console.log(props.message)
    // alert(props.message.message)



  return (
    <form onSubmit={handleSubmit}>
    <div className="bodyForm">
      <div class="form">
        <div class="title">Welcome</div>
        <div class="subtitle">Let's create your account!</div>
        <div class="input-container ic1">
          <input id="firstname" class="input" type="text" placeholder=" " />
          <div class="cut"></div>
          <label for="firstname" class="placeholderSign">
            First name
          </label>
        </div>
        <div class="input-container ic2">
          <input id="lastname" class="input" type="text" placeholder=" " />
          <div class="cut"></div>
          <label for="lastname" class="placeholderSign">
            Last name
          </label>
        </div>
        <div class="input-container ic2">
          <input id="email" class="input" type="text" placeholder=" " />
          <div class="cut cut-short"></div>
          <label for="email" class="placeholderSign">
            Email
          </label>
          
        </div>
        <div class="input-container ic1">
          <input id="password" class="input" type="text" placeholder=" " />
          <div class="cut"></div>
          <label for="password" class="placeholderSign">
            Password
          </label>
        </div>
        <div class="input-container ic1">
          <input id="photoURL" class="input" type="text" placeholder=" " />
          <div class="cut"></div>
          <label for="photoURL" class="placeholderSign">
            Avatar
          </label>
        </div>
        <div class="input-container ic1">
          <input id="chooseCountry" class="input" type="text" placeholder=" " />
          <div class="cut"></div>
          <label for="chooseCountry" class="placeholderSign">
            Country
          </label>
        </div>
        <button type="submit" class="submit">
          submit
        </button>
      </div>
    </div>
    </form>
  );
}
const mapDispatchToProps = {
  signUpUser: userActions.signUpUser,
  
}
const mapStateToProps = (state) => {
return {
  message: state.userReducer.message,
}
}



export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
