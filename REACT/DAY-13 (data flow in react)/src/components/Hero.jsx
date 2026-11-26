import React from 'react'

const Hero = (props) => {
  console.log(props)
  return (
    <div className='hero'>{props.data} hero</div>
  )
}

export default Hero