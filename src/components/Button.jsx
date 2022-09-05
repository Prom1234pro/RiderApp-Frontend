import React from 'react'

function Button(props) {
    const {tittle}= props
  return (
    <div>
      <button>{tittle}</button>
    </div>
  )
}

export default Button
