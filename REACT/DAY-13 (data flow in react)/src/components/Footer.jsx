import React from 'react'

const Footer = (props) => {
  console.log(props)

  return (
    <div className='footer'>{`${props.data} footer`}</div>
  )
}

export default Footer