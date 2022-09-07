import React from 'react'
import character from "../../assets/Character.svg"
import './Character.css'

function Character(props) {
    const {icons, create, account}= props
    return (
        <div className="character">
            <div className="create-account">
                <p>{icons}</p>
                <h1>{create} <br />{account}</h1>
            </div>
            <div className="d-rider">
                <img src={character} alt="" height='70%'/>
            <div className="shadow"/>
        </div>
</div>
  )
}

export default Character
