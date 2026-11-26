import React from 'react'

const Card = ({ data,index }) => {
  return (
    <div>
        <h1>hello main hu card</h1>
        <p key={index}>{data}</p>
    </div>
  )
}

export default Card