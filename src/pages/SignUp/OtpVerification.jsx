import React from 'react'
import Character from '../../components/Character/Character'
import { FiArrowLeftCircle } from "react-icons/fi";
import OtpCode from '../../components/OtpVerificationCode';
import FormFooter from '../../components/Form/FormFooter';
// import './SignUp.css'


function OtpVerification() {
    const phoneNumber = "09035822511"
  return (
    <div className='Otp-Verification-Container'>
			<Character icons={<FiArrowLeftCircle/>} create="Create" account="Account" />
            <div className="otp-verification">
                <h1>OTP Verification</h1>
                <p>We Will send you a one time password on </p>
                <p>this Mobile Number</p>
                <div className="num-box"><p>{phoneNumber}</p></div>
                <OtpCode/>
            </div>
            <FormFooter text1="Have an account ?" text2="Login"/>
    </div>
  )
}

export default OtpVerification
