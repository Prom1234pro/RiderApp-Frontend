import React, { useEffect, useState } from 'react'
import FormFooter from '../Form/FormFooter'
const curveLayer1: string = require('../../assets/curve-svg-1.svg').default
const curveLayer2: string = require('../../assets/Frame1.svg').default

type Props = {
  children: JSX.Element
  repeat?: boolean
  
}

const CurveLayer = (props: Props) => {
	const {children, repeat} = props
	return (
		<div className="curve">
			<img src={curveLayer1} className="curve-layer-1" alt="" />
			{children}
			{repeat && <>
				<FormFooter text1="Have an account ?" text2="Login">
					<img src={curveLayer2} className="curve-layer-2" alt=""/>
				</FormFooter>
			</>}
		</div>
  )
}

export default CurveLayer