import React from 'react'
import Hero from './components/Hero'
import ButtonComponent from './components/ButtonComponent'
import ButtonFunc from './components/ButtonFunc'
import Section from './components/Section'
import CompChildren from './components/CompChildren'
import DefaultProps from './components/DefaultProps'

const App = () => {
  let but = {
    logout: "logout",
    logIn: "logIn"

  }
  function buttonClick() {
    console.log("button click hua hai")
  }
  const comp2 = <>
    <h1>main hu sahil</h1>
    <p>mera gaana hai piyara</p>
  </>
  return (
    <div>
      <Hero title="Welcome to My App" age={20} isStudents={true} />
      <ButtonComponent data={but} />
      <ButtonFunc handleClick={buttonClick} />
      <Section comp={<>
        <h1>hello gusyx</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dicta libero placeat amet ipsa? Asperiores cupiditate nihil pariatur excepturi, id dolorem magnam obcaecati unde iusto labore? Officia cupiditate placeat omnis.</p>
      </>} comp2={comp2} />

      <CompChildren title="yeh hai comp children ">
        <h1>main iss jaha ka papa hu mera jaisa koi bhi nahi</h1>
        <Section comp={<>
          <h1>hello gusyx</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dicta libero placeat amet ipsa? Asperiores cupiditate nihil pariatur excepturi, id dolorem magnam obcaecati unde iusto labore? Officia cupiditate placeat omnis.</p>
        </>} comp2={comp2} />
      </CompChildren>
      <DefaultProps title='sahil' />
    </div>
  )
}

export default App