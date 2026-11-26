import React from 'react'

const Header = (props) => {
  console.log(props)
  function handleShareData() {
    props.func("yeh data header ki taraf se hai apke liye")
  }
  return (
    <div onClick={handleShareData}
      className='header'>Header</div>
  )
}

export default Header