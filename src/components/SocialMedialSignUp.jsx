import React from 'react'

function SocialMedialSignUp(props) {
    const {image, SignUpWith} = props
  return (
    <div className='SignUpWith'>
      <img src={image} alt="" width={30} height={30}/>
      <p>{SignUpWith}</p>
    </div>
  )
}

export default SocialMedialSignUp
