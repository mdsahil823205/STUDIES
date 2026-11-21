import React from 'react'
import Navbar from './components/Navbar'
import cardData from "./data/CardData.js"
import Card from './components/Card.jsx'
const App = () => {

  return (
    <div>
      <Navbar />
      <div className='cards-container'>
        {cardData.map((cardData, index) => {
          return (
            <Card key={index} image={cardData.image} title={cardData.title} category={cardData.category} price={cardData.price} inStock={cardData.inStock} />
          )
        })}
      </div>
      
    </div>
  )
}

export default App