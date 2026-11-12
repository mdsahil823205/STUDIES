import React, { useState } from "react";
import Navbar from "./Navbar";
const Conponent = () => {
  return (
    <div>
      <h1>this is component</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
        alias quibusdam perspiciatis accusantium deserunt ut, adipisci dolorem
        cumque ab nostrum ipsum voluptatem, culpa voluptatibus eius modi
        voluptate voluptas quis aliquam.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At quibusdam
        pariatur laborum dignissimos quae doloremque illum officia ratione
        maiores quis quam, id est veniam labore mollitia error voluptas repellat
        maxime.
      </p>
    </div>
  );
};
const data = [
  {
    name: "sahil",
    age: 20,
    city: "kolkata",
  },
  {
    name: "hahider",
    age: 10,
    city: "delhi",
  },
  {
    name: "ali",
    age: 210,
    city: "pune",
  },
  {
    name: "khan",
    age: 0,
    city: "goa",
  },
];

const App = () => {
  const [count, setCount] = useState(0)
  
  return (
    <div>
     
      <Navbar data={data} count={count} setCount={setCount} />
    </div>
  );
};

export default App;
