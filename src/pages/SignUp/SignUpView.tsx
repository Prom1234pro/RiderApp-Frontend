import React from 'react'
import Character from '../../components/Character'
import Button from '../../components/Form/Button'
import system from '../../locales/en.json'
import './SignUp.css'
import Horizontal from '../../components/Horizontalrule'
import { styles } from '../../configs/styles'
import CurveLayer from '../../components/CurveLayer'

const SignUpView = () => {
	
	return (
		<div className="sign-up-page">
			<Character/>
			<CurveLayer rotate={true}/>
			
			<div className="sign-up-view-block">
				<h1>{system.appName}</h1>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ipsam iusto animi omnis ipsum temporibus assumenda illum amet autem laudantium!</p>
				<Button location="/signup" title="Sign up"/>
				<div className="horizontal">
					<Horizontal/>
				</div>
				<Button location="/login" title="Login" type="custom" style={styles.custom}/>
			</div>
		</div>
	)
}

export default SignUpView