import React, { useState } from "react";

const App = () => {
    const [languages, setlanguages] = useState({
        html: false,
        css: false,
        javascript: false
    })

    function handleCheckBox(e) {
        console.log(e.target)
        const { name, checked } = e.target
        setlanguages({ ...languages, [name]: checked })
    }
    const isSelectAll = Object.values(languages).every((item) => (item == true))
    function handleSelectAll(e) {
        const { checked } = e.target
        setlanguages({ html: checked, css: checked, javascript: checked })
    }
    return (
        <div>
            <label htmlFor="selectAll">
                <input name="selectAll" type="checkbox" checked={isSelectAll} id="selectAll" onChange={handleSelectAll} />
                selectAll |
            </label>
            <label htmlFor="html">
                <input name="html" type="checkbox" checked={languages.html} id="html" onChange={handleCheckBox} />
                html |
            </label>

            <label htmlFor="css">
                <input name="css" type="checkbox" checked={languages.css} id="css" onChange={handleCheckBox} />
                css |
            </label>

            <label htmlFor="javascript">
                <input name="javascript" type="checkbox" checked={languages.javascript} id="javascript" onChange={handleCheckBox} />
                javascript
            </label>

            <div>
                {languages.html && <p>html selected</p>}
                {languages.css && <p>css selected</p>}
                {languages.javascript && <p>javascript selected</p>}
            </div>
        </div>
    );
};

export default App;
