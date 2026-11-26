import React from 'react'

const ButtonComponent = ({ data, }) => {
    const { logout, logIn } = data
    return (
        <div>
            <button>{logout}</button>
            <button>{logIn}</button>
        </div>
    )
}

export default ButtonComponent