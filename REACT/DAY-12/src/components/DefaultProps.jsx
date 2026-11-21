import React from 'react'

const DefaultProps = ({ title = "haider", age = 20 }) => {
    return (
        <div><h1>{title}</h1><h5>{age}</h5></div>
    )
}

export default DefaultProps