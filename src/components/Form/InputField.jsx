import React from 'react'
import './Form.css'

function InputField(props) {
    const {id, text, placeholder, type, length, width} = props
  return (
    <div>
       <label htmlFor={id} >{text}</label>
        <input type={type} placeholder={placeholder} id={id} maxLength={length} width={width}/>
    </div>
  )
}

export default InputField
