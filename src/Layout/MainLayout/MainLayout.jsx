import React from 'react'
import {styles} from '../../configs/styles'
import system from '../../locales/en.json'


const LoadingBar = () => (
    <div className="outer-bar">
        <div className="inner-bar"/>
    </div>
)


const SplashScreen = () => (
    <div className="splash-screen" style={styles.splash}>
        <h1 className="app-name">{system.appTitle}</h1>
        <LoadingBar/>
    </div>
)


const MainLayout = () => {
  return (
    <div>
      <SplashScreen/>
    </div>
  )
}

export default MainLayout
