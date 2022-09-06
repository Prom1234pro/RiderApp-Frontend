import React from 'react'
import character from "../../assets/Character.svg"

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
    <hr />
    </div>
</div>
  )
}

export default Character
<<<<<<< HEAD
				
				
				
=======
>>>>>>> cd9421f3d0287a1f8a3cdef4b4a09b0eec24fa2d
