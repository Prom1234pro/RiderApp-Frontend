import React from 'react'
import './Form.css'
import { useNavigate } from 'react-router-dom'
import {styles} from '../../configs/styles'

type Props = {
	title: string
	type?: string
	style?: object
	location: string
}

const Button: React.FC<Props> = (props)=>{
	const {title, type, style, location}= props
	
	const navigate = useNavigate()
	const handleClick = () => {
		navigate(location)
	}
	return (
		<div>
			<button onClick={handleClick} style={type !=="custom"?styles.button: style}>{title}</button>
		</div>
	)
}
export default Button
