import React from 'react'
import { FiArrowLeftCircle } from "react-icons/fi";
import character from "../../assets/Character.svg"
import Button from '../../components/Button'
import Horizontal from '../../components/Horizontalrule'
import SocialMedialSignUp from '../../components/SocialMedialSignUp'
import image from "../../assets/google.png"
import Forms from '../../components/Forms'
import './SignUp.css'

function SignUp() {
  return (
    <div className='sign-up-page'>
      <div className="character">
        <div className="create-account">
          <p><FiArrowLeftCircle/></p>
          <h1>Create <br /> Account</h1>
        </div>
        <div className="d-rider">
            <img src={character} alt="" height='70%'/>
          <hr />
        </div>
      </div>
      <div className="sign-up-form-container">
      <Forms/>
      <div className="sign-up-button">
        <Button tittle="Create account" className='sign-up-button'/>
      </div>
      <div className="horizontal">
        <Horizontal/>
      </div>
        <SocialMedialSignUp SignUpWith="Sign Up with Google" image={image} />
      </div>
    </div>
  )
}

export default SignUp
