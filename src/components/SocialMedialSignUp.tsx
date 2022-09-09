import React from 'react'

type Props = {
	image: string
	SignUpWith: string
}

const SocialMedialSignUp : React.FC<Props> = (props)=> {
    const {image, SignUpWith} = props
	return (
		<div className='SignUpWith'>
			<img src={image} alt="" width={30} height={30}/>
			<p>{SignUpWith}</p>
		</div>
  )
}

export default SocialMedialSignUp
