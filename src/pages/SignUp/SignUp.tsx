import React from 'react'
import { FiArrowLeftCircle } from "react-icons/fi";
import Button from '../../components/Form/Button'
import Horizontal from '../../components/Horizontalrule'
import SocialMedialSignUp from '../../components/SocialMedialSignUp'
import Forms from '../../components/Form'
import './SignUp.css'
import Character from '../../components/Character'
import CurveLayer from '../../components/CurveLayer';
import AuthSection from '../../components/AuthSection';
const image: string = require("../../assets/google.png")


type Props = {}
type input = {
	id: string
	text: string
	placeholder: string
	type: string
}
const SignUp: React.FC<Props> = (Props)=> {
  
	const formProps: input[] = [
		{
			id: "full-name",
			text: "Full Name",
			placeholder: "Enter your name",
			type: "text"
		},
		{
			id: "phone-number",
			text: "Phone Number",
			placeholder: "Enter your phone number",
			type: "text"
		},
		{
			id: "email",
			text: "Email",
			placeholder: "Enter your email",
			type: "email"
		},
		{
			id: "username",
			text: "Username",
			placeholder: "Enter a username",
			type: "text"
		},
		{
			id: "password",
			text: "Password",
			placeholder: "Minimum of 8 characters",
			type: "password"
		},
	]
	return (
		<AuthSection>
			<>
				<Character icons={<FiArrowLeftCircle/>} create="Create" account="Account" />
				<CurveLayer >
				<div className="sign-up-form-container">
					<Forms formInput={formProps}/>
					<div className="sign-up-button">
						<Button location="/otp-verification" title="Create account"/>
					</div>
					<div className="horizontal">
						<Horizontal/>
					</div>
					<SocialMedialSignUp SignUpWith="Sign Up with Google" image={image} />
				</div>
				</CurveLayer>
			</>
		</AuthSection>
	)
}

export default SignUp
