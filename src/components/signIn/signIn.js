import React from "react"
import "./signIn.css"
import { connect } from 'react-redux';
import userActions from "../../redux/actions/userActions"

import FacebookSignIn from "./FacebookSignIn";

 function SignIn (props) {
    const handleSubmit = (event) => {
		event.preventDefault()
		const logedUser = {
			email: event.target[0].value,
			password: event.target[1].value,
			from: "form-Signup"
		}
		props.signInUser(logedUser)
    console.log(props.signInUser(logedUser))
	}



    return(
      <div>
        
        <form onSubmit={handleSubmit}>
        <div >
            <div className="bodyForm">
      <div class="form">
        <div class="title">Welcome</div>
        <div class="subtitle">Let's create your account!</div>
        <div class="input-container ic2">
          <input id="email" class="input" type="email" placeholder=" " />
          <div class="cut cut-short"></div>
          <label for="email" class="placeholderSign">
            Email
          </label>
        </div>
        <div class="input-container ic1">
          <input id="password" class="input" type="password" placeholder=" " />
          <div class="cut"></div>
          <label for="password" class="placeholderSign">
            Password
          </label>
        </div>
        <FacebookSignIn/>
        <button type="submit" class="submit">
          submit
        </button>
      </div>
    </div> 
            
             
        </div>
        </form>
      </div>

    )





}
const mapDispatchToProps = {
	signInUser: userActions.signInUser,

}
// const mapDispatchToProps ={}



export default connect(null, mapDispatchToProps)(SignIn);