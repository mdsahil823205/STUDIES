import React, { useState } from "react";

const App = () => {
    const [ischeck, setischeck] = useState(false)
    const handleChange = (e) => {
        let check = e.target.checked
        console.log(check)
        setischeck(check)

    }
    return (
        <div>
            <label htmlFor="tc">
                <input id="tc" type="checkbox" checked={ischeck} onChange={handleChange} />
                agree term and condition
            </label>
            {ischeck && <p>yes you can acess the website</p>}
        </div>
    );
};

export default App;
