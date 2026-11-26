import React from 'react'
import Hero from './Hero'
import Footer from './Footer'
import About from './About'

const Layout = (props) => {
    console.log(props)

    return (
        <div className='layout'>
            <div className='footer'>{`${props.data} layout`}</div>
            <Hero data={props.data} />
            <About data={props.data} />
        </div>
    )
}

export default Layout