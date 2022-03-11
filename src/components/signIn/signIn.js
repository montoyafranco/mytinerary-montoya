import React from "react"
import "./signIn.css"

export default function SignIn () {



    return(
        <div >
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
        <button type="text" class="submit">
          submit
        </button>
      </div>
    </div> 
            
             
        </div>
    )





}