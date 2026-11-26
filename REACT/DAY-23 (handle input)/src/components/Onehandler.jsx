import React, { useState } from 'react'

const App = () => {
  const [input, setInput] = useState({
    name: '',
    email: ''
  })

  console.log(input)
  function inputHandler(e) {
    const { name, value } = e.target
    console.log(name, value)
    setInput((prev) => (
      { ...prev, [name]: value }
    ))
  }
  return (
    <div>
      <input name='name' value={input.name} type="text" placeholder='enter name'
        onChange={inputHandler} />

      <input name='email' value={input.email} type="text" placeholder='enter email'
        onChange={inputHandler} />

      <button onClick={inputHandler}>clear</button>

      <p>name: {input.name}</p>
      <p>email: {input.email}</p>
    </div>
  )
}

export default App