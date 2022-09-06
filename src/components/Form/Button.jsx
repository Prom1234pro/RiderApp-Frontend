import React from 'react'
import {styles} from '../../configs/styles'
function Button(props) {
    const {title}= props
  return (
    <div>
      <button styles={styles.button}>{title}</button>
    </div>
  )
}

export default Button
