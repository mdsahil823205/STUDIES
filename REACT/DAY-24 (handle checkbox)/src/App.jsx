import React, { useState } from 'react'

const App = () => {
  const [languages, setlanguages] = useState({
    html: false,
    css: false,
    javascript: false
  })
  const languageKey = Object.keys(languages)
  function handleOnsubmit(e) {
    const { checked, name } = e.target
    console.log(checked, name)
    setlanguages({ ...languages, [name]: checked })

  }
  const selectAll = Object.values(languages).every((item) => item === true)
  function handleSelecAll(e) {
    console.log(e.target.checked)
    let checked = e.target.checked
    setlanguages({ html: checked, css: checked, javascript: checked })
  }
  return (
    <div>
      <label htmlFor="selectAll">
        <input
          name="selectAll"
          type="checkbox"
          id="selectAll"
          checked={selectAll}
          onChange={handleSelecAll} />
        select all
      </label>
      {languageKey.map((item, index) => (
        <label key={index} htmlFor={item}>
          <input
            name={item}
            type="checkbox"
            id={item}
            checked={languages[item]}
            onChange={handleOnsubmit} />
          {item}
        </label>
      ))}
      <div>
        {languageKey.map((item, index) => {
          return (languages[item] && <p key={index}>{item}</p>)
        })}
      </div>
    </div>
  )
}

export default App