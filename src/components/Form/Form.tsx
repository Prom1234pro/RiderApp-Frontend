import React from 'react'
import InputField from './InputField'

type Props =  {
	formInput: input[]
}
type input = {
	id: string
	text: string
	placeholder: string
	type: string
}

const Forms:React.FC<Props> = (props) =>{
	const {formInput} = props
	return (
		<div>
			<form action="">
				{formInput.map((input:input) =>(
					<InputField key={input.id} id={input.id} text={input.text} placeholder={input.placeholder} type={input.type}/>
				))}
			</form>
			</div>
	)
}

export default Forms
