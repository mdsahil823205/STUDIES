import React, { useState } from 'react'
import data from "./assets/data"
console.log(data)

const App = () => {
  const [selectCountry, setselectCountry] = useState("")
  const [selectCity, setselectCity] = useState("")
  console.log(selectCountry, selectCity)
  // console.log(data[selectCountry])
  function handlecountry(e) {
    setselectCountry(e.target.value)
    setselectCity("")
  }
  return (
    <div className='flex gap-6'>
      {/* country */}
      <select value={selectCountry} onChange={handlecountry}>
        <option value="" >--select country--</option>
        {Object.keys(data).map((item) => (
          <option key={item} value={item}>{item}</option>
        ))}
      </select>
      {/* city */}
      {selectCountry && <select value={selectCity} onChange={(e) => { setselectCity(e.target.value) }}>
        <option value="" >--select city--</option>
        {data[selectCountry].map((item) => (
          <option key={item} value={item}>{item}</option>
        ))}
      </select>}
      <p>country :{selectCountry}</p>
      <p>country :{selectCity}</p>
    </div>
  )
}

export default App