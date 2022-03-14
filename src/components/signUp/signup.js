import React from "react";
import "./signup.css";
import { connect } from 'react-redux';
import userActions from "../../redux/actions/userActions"

 function SignUp(props) {
  
    const handleSubmit = (event) => {
        event.preventDefault()
        let form = document.getElementById("formIn")
    

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
        form.reset()
        
    }
    // console.log(props.message)
    // alert(props.message.message)



  return (
    <form onSubmit={handleSubmit} id="formIn">
    <div className="bodyFormUp">
      <div class="formUp">
        <div class="title">Welcome</div>
        <div class="subtitle">Let's create your account!</div>
        <div class="input-containerUp ic1Up">
          <input id="firstname" class="input" type="text" placeholder=" " />
          <div class="cut"></div>
          <label for="firstname" class="placeholderSignUp">
            First name
          </label>
        </div>
        <div class="input-containerUp ic2Up">
          <input id="lastname" class="input" type="text" placeholder=" " />
          <div class="cut"></div>
          <label for="lastname" class="placeholderSignUp">
            Last name
          </label>
        </div>
        <div class="input-containerUp ic2Up">
          <input id="email" class="input" type="text" placeholder=" " />
          <div class="cut cut-short"></div>
          <label for="email" class="placeholderSignUp">
            Email
          </label>
          
        </div>
        <div class="input-containerUp ic1Up">
          <input id="password" class="input" type="text" placeholder=" " />
          <div class="cut"></div>
          <label for="password" class="placeholderSignUp">
            Password
          </label>
        </div>
        <div class="input-containerUp ic1Up">
          <input id="photoURL" class="input" type="text" placeholder=" " />
          <div class="cut"></div>
          <label for="photoURL" class="placeholderSignUp">
            Avatar
          </label>
        </div>
        <div class="input-containerUp ic1Up">
          <input id="chooseCountry" class="input" type="text" placeholder=" " />
          <div class="cut"></div>
          <label for="chooseCountry" class="placeholderSignUp">
            Country
          </label>
        </div>
        <button type="submit" class="submit">
          Submit 🚀
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
