import React, { useEffect } from 'react'
import { useState} from 'react'
import Button from './Form/Button'

// type Props = {

// }


function OtpCode() {
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
	
	const onOtpVerification = (element:React.ChangeEvent<HTMLInputElement> | null, index:number) =>{
		if(!element) return
		// if(otp[index] !== "")element.nextSibling.focus();
		// if(otp[index] === "")element.previousSibling.focus();
		if(isNaN(Number(element.target.value)))
		return false
		
		setOtp([...otp.map((d, idx) => (idx===index) ? element.target.value: d)]);
		
		if(element.target.value !==""){
			(element.target.nextSibling as HTMLElement).focus();
		}
		if(element.target.value ===""){
			(element.target.previousSibling as HTMLElement).focus()
		}

		
	}

	return (
		<div className='OtpVerification-code'>
		<div className="verification-num">
		{otp.map( (data, index)=> {
		return (
			<input 
			maxLength={1} 
			type='text'
			name="otp"
			key={index}
			value={data}
			onChange={(e:React.ChangeEvent<HTMLInputElement>) =>onOtpVerification(e, index)}
			onFocus={(e:React.FocusEvent<HTMLInputElement>) => e.target.select()}
			/>
		);
		})}
		</div>
					
		<div className="otp-timing">
			<p>{count}s</p>
						<Button title="Create Verify" location='/'/>
			<p>Did not receive OTP? <span>Send OTP</span></p>
		</div>
		</div>
	)
}

export default OtpCode
