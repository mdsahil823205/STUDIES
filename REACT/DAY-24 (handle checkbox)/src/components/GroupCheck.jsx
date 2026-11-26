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
  return (
    <div>
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
