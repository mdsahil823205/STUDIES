import React from 'react'
import Header from "./Header"  // isko default export kehte hai iska hum kuch bhi name rakh skhte hai bhale hi kuch bhi name se hum export kyu naa hi kiye ho
import { Card1, Card2, Card3 } from "./Header"  // isko naming import kehte hai isme jo name hum export karte waqt dete hai exact wahi name de skte hai

import photo from "./assets/react.svg"  // agar mera photos ya kuch bhi src ke andr rahega toh humko yeh method try karna hai recommended method
const App = () => {
  return (
    <div>
      <Header />
      <Card1 />
      <Card2 />
      <Card3 />

      <img src="./favicon.svg" alt="" />   {/* // agar kuch photo wagaira public folder main hai toh direct path dene se woh photo aa jaaiyega  */}

      <img src="./src/assets/vite.svg" alt="" /> {/* agar mera photo src folder ke andar toh humko pura path dena hoga tabhi jaake image show hoga  */}

      <img src={photo} alt="" />  {/* yeh recommended method hai isko export photo method kehte hai yahi best hai agar mera photos wagaira src ke andr ho isse humko pura path nahi dena hota hai  */}
    </div>
  )
}

export default App