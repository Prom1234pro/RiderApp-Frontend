import React from 'react'
import './Form.css'
type Props = {
  id: string
  text: string
  placeholder: string
  type: string
  width?: number
  length?: number
}

const InputField:React.FC<Props> = (props) =>{
    const {id, text, placeholder, type, length, width} = props
  return (
    <div>
       <label htmlFor={id} >{text}</label>
        <input type={type} placeholder={placeholder} id={id} maxLength={length} width={width}/>
    </div>
  )
}

export default InputField
