import React, { useState } from "react";

const App = () => {
  const [isHtml, setisHtml] = useState(false)
  const [isCss, setisCss] = useState(false)
  const [isJs, setisJs] = useState(false)

  const hanldeHtml = (e) => {
    let check = e.target.checked
    setisHtml(check)
  }
  const hanldeCss = (e) => {
    let check = e.target.checked
    setisCss(check)
  }
  const hanldeJs = (e) => {
    let check = e.target.checked
    setisJs(check)
  }
  return (
    <div>
      <label htmlFor="html">
        <input type="checkbox" checked={isHtml} id="html" onChange={hanldeHtml} />
        html |
      </label>

      <label htmlFor="css">
        <input type="checkbox" checked={isCss} id="css" onChange={hanldeCss} />
        css |
      </label>

      <label htmlFor="javascript">
        <input type="checkbox" checked={isJs} id="javascript" onChange={hanldeJs} />
        javascript
      </label>

      <div>
        {isHtml && <p>html selected</p>}
        {isCss && <p>css selected</p>}
        {isJs && <p>javascript selected</p>}
      </div>
    </div>
  );
};

export default App;
