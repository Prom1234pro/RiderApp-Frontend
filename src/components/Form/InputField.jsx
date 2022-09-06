import React from 'react'

function InputField(props) {
    const {id, text, placeholder, type} = props
  return (
    <div>
       <label htmlFor={id} >{text}</label>
        <input type={type} placeholder={placeholder} id={id}/>
    </div>
  )
}

export default InputField
