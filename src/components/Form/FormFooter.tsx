import React from 'react'

type Props = {
  text1: string
  text2: string
  children?: JSX.Element
}

const FormFooter: React.FC<Props> = (props) => {
    const {text1, text2, children} = props
  return (
    <div className='form-footer'>
      {children}
      <p>{text1} <span>{text2}</span></p>
    </div>
  )
}

export default FormFooter
