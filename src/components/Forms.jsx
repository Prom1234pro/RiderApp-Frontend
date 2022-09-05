import React from 'react'
import InputField from './InputField'

function Forms() {
  return (
    <div>
      <form action="">
        <InputField id="full-name" text="Full Name" placeholder="Enter your name" type="text"/>
        <InputField id="phone-number" text="Phone Number" placeholder="Enter your phone number" type="text"/>
        <InputField id="email" text="Email" placeholder="Enter your email address" type="email"/>
        <InputField id="username" text="Username" placeholder="Enter a username" type="text"/>
        <InputField id="password" text="Password" placeholder="Minimum of 8 characters" type="password"/>
      </form>
    </div>
  )
}

export default Forms
