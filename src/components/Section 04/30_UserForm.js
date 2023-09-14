/* [33] useInput Custom hook */

import React from 'react'
import useInput from './hooks/useInput'

function UserForm() {
  const [firstName, bindFirstName, resetFirstName] = useInput("")
  const [lastName, bindLastName, resetLastName] = useInput("")

  const submitHandler = (e) => {
    e.preventDefault()
    alert(`Hi ${firstName} ${lastName}`)
    resetFirstName()
    resetLastName()
  }

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="firstName">First name : </label>
        <input type="text" id="firstName" value={firstName} {...bindFirstName} />
      </div>
      <div>
        <label htmlFor="firstName">Last name : </label>
        <input type="text" id="lastName" value={lastName} {...bindLastName} />
      </div>
      <button type="Submit">Submit data</button>
    </form>
  )
}

export default UserForm
