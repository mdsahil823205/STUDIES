import React from 'react'
import Card from './components/Card'
import cardData from "./assets/data.json"
const App = () => {
  return (
    <div className='h-full w-screen bg-gray-900 p-3 flex flex-col gap-3 '>
     {cardData.map((item, index) => (
        <Card key={index} elem={item} />
      ))}
    </div>
  )
}

export default App