import React, { useState } from 'react'
const data = ["bca", "bba", "btech", "bcom", "ba", "mcom", "mca", "mba"]
let courses = data.sort().toString().toUpperCase().split(",")
console.log(courses)
const App = () => {
  const [selectCourse, setSelectCourse] = useState('')
  console.log(selectCourse)
  return (
    <div>
      <select value={selectCourse} onChange={(e) => setSelectCourse(e.target.value)}>
        <option value="">--select course--</option>
        {courses.map((item) => (
          <option key={item} value={item}>{item}</option>
        ))}
      </select>
    </div>
  )
}

export default App