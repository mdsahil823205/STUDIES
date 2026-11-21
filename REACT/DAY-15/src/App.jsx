import React, { useEffect, useState } from 'react'

const App = () => {

  const [count, setcount] = useState(0)

  useEffect(() => {
    console.log("mujhe useeffect se bulaya jaaiyega jab jab page refresh hoga ")
  }, []) // agar hum dependency nahi denge toh har ek state ui main jab update hoga tab tab useeffect chalega

  function increment() {
    setcount((prev) => prev = prev + 1)
  }
  function decrement() {
    setcount((prev) => prev = prev - 1)
  }
  function reset() {
    setcount((prev) => prev = 0)
  }


  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  )
}

export default App