import React from 'react'
import {styles} from '../../configs/styles'
function Button(props) {
    const {title}= props
  return (
    <div>
      <button style={styles.button}>{title}</button>
    </div>
  )
}

export default Button
