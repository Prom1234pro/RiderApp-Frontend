import React from 'react'
import './Character.css'
const character: string = require("../../assets/Character.svg").default

type Props = {
    icons? : JSX.Element
    create?: string
    account?: string
}
const Character:React.FC<Props> = (props) =>{
    const {icons, create, account}= props
    return (
        <div className="character">
            {icons || create ? 
            <div className="create-account">
                <p>{icons}</p>
                <h1>{create} <br />{account}</h1>
            </div>: <div className="empty"></div>
            }
            <div className="d-rider">
                <img src={character} alt="" height='70%'/>
            <div className="shadow"/>
        </div>
</div>
  )
}

export default Character
