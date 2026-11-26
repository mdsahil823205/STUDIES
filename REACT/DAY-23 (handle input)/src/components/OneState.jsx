import React, { useState } from 'react'

const App = () => {
    const [input, setInput] = useState({
        name: '',
        email: ''
    })

    function namehandler(e) {
        setInput((prev) => ({ ...prev, name: e.target.value }))
    }
    function emailhandler(e) {
        setInput((prev) => ({ ...prev, email: e.target.value }))
    }
    function resethandler() {
        setInput(() => {
            return {
                name: "",
                email: ""
            }
        })
    }
    return (
        <div>
            <input value={input.name} type="text" placeholder='enter name'
                onChange={namehandler} />

            <input value={input.email} type="text" placeholder='enter email'
                onChange={emailhandler} />

            <button onClick={resethandler}>clear</button>

            <p>name: {input.name}</p>
            <p>email: {input.email}</p>
        </div>
    )
}

export default App