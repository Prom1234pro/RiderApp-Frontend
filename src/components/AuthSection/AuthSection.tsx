import React from 'react'

type Props = {
  children: JSX.Element
}

const AuthSection = (props: Props) => {
  const { children } = props
  return (
    <div className="auth-section">{children}</div>
  )
}

export default AuthSection