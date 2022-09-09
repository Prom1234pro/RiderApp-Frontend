import React, { useState } from 'react'
// import SignUpView from '../../pages/SignUp/SignUpView'
import {styles} from '../../configs/styles'
import system from '../../locales/en.json'

const SplashScreen = () => (
    <div className="splash-screen" style={styles.splash}>
        <h1 className="app-name">{system.appTitle}</h1>
        <div className="outer-bar">
          <div className="inner-bar"/>
        </div>
    </div>
)

type Props = {
	children: JSX.Element
}

const MainLayout: React.FC<Props> = (props) => {
	const {children} = props
	const [loaded, setLoading] = useState(false)
	setTimeout(() =>{
		setLoading(true)
	}, 3000)
	if(loaded){
		return <>{children}</>
	}

	return SplashScreen()
}

export default MainLayout
