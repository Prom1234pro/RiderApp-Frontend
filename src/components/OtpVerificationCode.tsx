import React from 'react'
import Button from './Form/Button'

// type Props = {

// }

function OtpCode() {
  const timing = "00.30"
  return (
    <div className='OtpVerification-code'>
      <div className="verification-num">
        <input maxLength={1} type='text'/>
        <input maxLength={1} type='text'/>
        <input maxLength={1} type='text'/>
        <input maxLength={1} type='text'/>
      </div>
				
      <div className="otp-timing">
        {timing}
					<Button title="Create Verify" location="/"/>
          <p>Did not receive OTP? <span>Send OTP</span></p>
      </div>
    </div>
  )
}

export default OtpCode
