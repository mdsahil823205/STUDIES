import React from 'react'

const Result = ({ score }) => {
  return (
    <div>
      <h1 className="text-5xl capitalize my-10">result</h1>
      <h3 className="text-3xl capitalize">your score: {score}</h3>
    </div>
  )
}

export default Result