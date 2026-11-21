import React, { useState } from 'react'
import Header from './components/Header'
import Layout from './components/Layout'
import Footer from './components/Footer'

const App = () => {
  const [data, setData] = useState("sahil")

  function receviedDataHeader(data) {
    console.log(data)
    setData(data)
  }
  return (
    <div>
      <Header data={data} func={receviedDataHeader} />
      <Layout data={data} />
      <Footer data={data} />
    </div>
  )
}

export default App