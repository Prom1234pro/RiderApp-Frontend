import React, { useEffect } from 'react'
import { useState} from 'react'
import Button from './Form/Button'
function OtpCode(props) {
	const [otp, setOtp] = useState(new Array(4).fill(""));
	const [filled, setFilled] = useState(false)
	const [count, setCount] = useState(60);
	useEffect(() => {
		if (count <= 0 || filled) {
			return
	  }
	  setTimeout(() => {
	  setCount((count) => count -1);
		
	  }, 1000);
	
	  
	}, [count, filled])
	
	useEffect(()=> {
		const fill = otp.every((value)=> value !=="")
		setFilled(fill)

	}, [otp])
	
	const onOtpVerification = (element, index) =>{
		// if(otp[index] !== "")element.nextSibling.focus();
		// if(otp[index] === "")element.previousSibling.focus();
		if(isNaN(element.value))
		return false
		
		setOtp([...otp.map((d, idx) => (idx===index) ? element.value: d)]);
		
		if(element.value !==""){
			element.nextSibling.focus();
		}
		if(element.value ===""){
			element.previousSibling.focus()
		}

		
	}

	return (
		<div className='OtpVerification-code'>
		<div className="verification-num">
		{otp.map( (data, index)=> {
		return (
			<input 
			maxLength="1" 
			type='text'
			name="otp"
			key={index}
			value={data}
			onInput={e =>onOtpVerification(e.target, index)}
			onfocus={e => e.target.select()}
			/>
		);
		})}
		</div>
					
		<div className="otp-timing">
			<p>{count}s</p>
						<Button title="Create Verify"/>
			<p>Did not receive OTP? <span>Send OTP</span></p>
		</div>
		</div>
	)
}

export default OtpCode
