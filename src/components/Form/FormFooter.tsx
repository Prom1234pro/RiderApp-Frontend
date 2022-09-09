import React from 'react'

type Props = {
  text1: string
  text2: string
}

const FormFooter: React.FC<Props> = (props) => {
    const {text1, text2} = props
  return (
    <div className='form-footer'>
      <p>{text1} <span>{text2}</span></p>
    </div>
  )
}

export default FormFooter
