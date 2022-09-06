import React from 'react'
import Button from './Form/Button'
import InputField from './Form/InputField'

function OtpCode(props) {
  const timing = "00.30"
  return (
    <div className='OtpVerification-code'>
					<InputField length={1}  />
					<InputField length={1}  />
					<InputField length={1}  />
					<InputField length={1}  />
      <div className="otp-timing">
        {timing}
					<Button title="Create Verify" className='sign-up-button'/>
          <p>Did not receive OTP? <span>Send OTP</span></p>
      </div>
    </div>
  )
}

export default OtpCode
