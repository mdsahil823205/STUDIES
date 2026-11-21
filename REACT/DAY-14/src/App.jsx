import React, { useState } from 'react'
import Card from './components/Card'

const App = () => {
  const [count, setcount] = useState(0)
  function increment() {
    setcount((prev) => {
      prev = prev + 1
      console.log(prev)
      return prev
    })
  }
  function decrement() {
    setcount(count - 1)
  }
  function reset() {  // jaruri nahi hai ki hum prev hi likhe kuch bhi likh skte hai 
    setcount(data => data = 0)
  }
  const [obj, setobj] = useState({  // usestate with object
    name: "sahil",
    age: 20
  })
  function objectHandle() {

    setobj((prev) => {
      console.log(prev)
      return {
        ...prev,  // spread operator se pehle jo object main data the woh copy hua isse main data main kuch effect nahi hoga new data main changes hoga
        name: "haider ali",
      }
    })
  }

  // use state with array
  const [city, setCity] = useState([])
  function handleCity() {
    setCity((prev) => {
      console.log(prev)
      return [

        "karachi",
        "lahore",
        "islamabad"
      ]
    })
  }
  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>

      <h2>{obj.name}</h2>
      {city.map((elem, index) => {
        return (
          <Card data={elem} key={index} />
        )
      })}
      <button onClick={objectHandle}>change name</button>
      <button onClick={handleCity}>show city</button>
    </div>
  )
}

export default App