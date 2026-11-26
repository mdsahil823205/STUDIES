import React from 'react'

const App = () => {
  function handleClick(e) {
    console.log(e.target.innerHTML)
  }
  function handleInput(e) {
    console.log(e.target.value)
  }
  function handleSubmnit(e) {
    e.preventDefault()
  }
  function handleMovement(e) {
    console.log(e.clientX)
  }
  return (
    <div>
      <button onClick={handleClick}>click me</button>

      <form onSubmit={handleSubmnit}>
        <input type="text" onChange={handleInput} />
        <input className=' px-20 py-10' type="submit" />

      </form>
      <div onMouseMove={handleMovement}>
        movie
      </div>
    </div>
  )
}

export default App