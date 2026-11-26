import React, { useEffect, useRef, useState } from 'react'

const App = () => {
  const [random, setrandom] = useState()
  // const [renderCount, setrenderCount] = useState(0)
  const renderCount = useRef(0)
  function handleRandom() {
    let r = Math.floor(Math.random() * 10000)
    setrandom(r)

  }
  useEffect(() => {
    console.log("render hua")
    renderCount.current += 1
  },[random])

  return (
    <div>
      <h1>random number : {random}</h1>
      <h2>re-render count:{renderCount.current}</h2>
      <button onClick={handleRandom}>generate random</button>
    </div>
  )
}

export default App