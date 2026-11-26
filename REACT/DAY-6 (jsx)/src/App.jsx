import React, { useState } from "react";

const App = () => {

  let data = ["sahil", 20, "kolata", "west bengal", "india", true]
  let name = "sahil"; // variable
  function greeting() {
    // passing a function
    return <div>kaise ho tum sahil</div>;
  }
  let age = 17;
  let a = 20;
  let b = 20;
  const [active, setactive] = useState(false);
  const [login, setlogin] = useState(false)
  let heading = <p style={{
    fontSize: "3rem"
  }}>this is heading</p>
  return (
    <div>
      <h1>my name is{name}</h1> {/* // using a vairable */}
      <h3>{greeting()}</h3> {/* // calling a function */}
      <p>{age >= 18 ? "you are eligible" : "you are not"}</p>{" "}
      {/* // using ternory operator */}
      <h4>adding a+b {a + b}</h4> {/* // mathematical operation */}
      <button
        style={{
          color: "black",
          padding: "1rem 4rem",
          borderRadius: "1rem",
          marginTop: "1rem",
          marginBottom: "1rem",
          backgroundColor: "red"
        }}  //using style object method
        onClick={() => setactive(!active)}
      >
        active
      </button>
      {active && <p style={{
        "color": "green",
        "background-color": "blue"  // using style with css 
      }}>sahi ho </p>}
      <button onClick={() => setlogin(!login)}>
        {login ? <p style={{ backgroundColor: "red", color: "white" }}>logout</p> : <p style={{ backgroundColor: "green", color: "white", display: "block" }}>login</p>}
      </button>


      {data.map((elem, index) => {
        return <p key={index}>
          {elem}
        </p>
      })}

      {heading}
      <Suno head={heading} />
    </div>
  );
};

function Suno({head}) {
  return head
}
export default App;
