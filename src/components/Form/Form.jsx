import React from 'react'
import InputField from './InputField'

function Forms(props) {
	const {formInput} = props
	return (
		<div>
			<form action="">
				{formInput.map((input)=>(
					<InputField key={input.id} id={input.id} text={input.text} placeholder={input.placeholder} type={input.type}/>
				))}
			</form>
			</div>
	)
}

export default Forms
