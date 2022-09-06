import React from 'react'
import Character from '../../components/Character/Character'
import { FiArrowLeftCircle } from "react-icons/fi";

function OtpVerification() {
  return (
    <div className='Otp-Verification-Container'>
			<Character icons={<FiArrowLeftCircle/>} create="Create" account="Account" />
    </div>
  )
}

export default OtpVerification
