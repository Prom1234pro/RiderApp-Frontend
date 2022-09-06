import React from 'react'

function FormFooter(props) {
    const {text1, text2} = props
  return (
    <div className='form-footer'>
      <p>{text1} <span>{text2}</span></p>
    </div>
  )
}

export default FormFooter
