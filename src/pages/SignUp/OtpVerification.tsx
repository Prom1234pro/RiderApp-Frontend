import React from 'react'
import Character from '../../components/Character/Character'
import { FiArrowLeftCircle } from "react-icons/fi";
import OtpCode from '../../components/OtpVerificationCode';
import './OtpVerification.css'
import CurveLayer from '../../components/CurveLayer';
import AuthSection from '../../components/AuthSection';


function OtpVerification() {
    const phoneNumber = "09035822511"
  return (
	<AuthSection>
		<>
			<Character icons={<FiArrowLeftCircle/>} create="Create" account="Account" />
			<CurveLayer repeat={true} >
				<div className="otp-verification">
					<h1>OTP Verification</h1>
					<p>We Will send you a one time password on </p>
					<p>this Mobile Number</p>
					<div className="num-box"><p>{phoneNumber}</p></div>
					<OtpCode/>
				</div>
			</CurveLayer>
		</>
	</AuthSection>
  )
}

export default OtpVerification
