import React, { useState } from 'react'


const App = () => {
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  return (
    <div>
      <input type="text" value={email} placeholder='enter email' onChange={(e) => {
        setemail(e.target.value)
      }} />
      <input type="text" value={name} placeholder='enter name' onChange={(e) => {
        setname(e.target.value)
      }} />
      <button onClick={() => {
        setemail("")
        setname("")
      }
      }>reset</button>
      <p>{email}</p>
      <p>{name}</p>
    </div >
  )
}

export default App