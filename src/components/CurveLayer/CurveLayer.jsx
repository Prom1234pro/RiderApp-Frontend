import React from 'react'

const CurveLayer = ({rotate}) => {
  return (
    <div className={rotate? "curve": "curve-layer"}>
        <svg style={{height: "200px",width: "100%"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 60" preserveAspectRatio="none">
			<path d="M 0 0 h 80 v 10 Q 60 0, 31 7 T 0 10 Z" fill="white" stroke="none" width="80" height="60" />
    	</svg>	
    </div>
  )
}

export default CurveLayer