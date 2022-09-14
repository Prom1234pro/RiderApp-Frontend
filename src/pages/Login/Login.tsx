import React from 'react'
import { FiArrowLeftCircle } from 'react-icons/fi'
import AuthSection from '../../components/AuthSection'
import Character from '../../components/Character'
import CurveLayer from '../../components/CurveLayer'
import Button from '../../components/Form/Button'
import Forms from '../../components/Form/Form'
import FormFooter from '../../components/Form/FormFooter'
import Horizontal from '../../components/Horizontalrule'
import SocialMedialSignUp from '../../components/SocialMedialSignUp'
const image: string = require("../../assets/google.png")

type Props = {}
type input = {
	id: string
	text: string
	placeholder: string
	type: string
}
const Login = (props: Props) => {
    const formProps: input[] = [
        {
			id: "email",
			text: "Email",
			placeholder: "Enter your email",
			type: "email"
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
            <Character icons={<FiArrowLeftCircle/>} />
			<CurveLayer repeat={true}>
				<div className="login-form-container">
					<Forms formInput={formProps}/>
					<div className="login-button">
						<Button location="/" title="Login"/>
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

export default Login