import React, { useState } from "react";

const App = () => {
  const [isAge, setIsAge] = useState(17);
  const [eligible, seteligible] = useState(17);
  const [isvalid, setisvalid] = useState(true);
  const [data, setdata] = useState("a");

  let isVote = null;
  //if else statement
  if (eligible >= 18) {
    isVote = <h1> you can vote</h1>;
  } else {
    isVote = <h1>you cannot vote</h1>;
  }
  return (
    <div>
      {/* ternory operator */}
      <div>
        {isAge >= 18 ? <h1>you are eligible</h1> : <h1>you are not eligibe</h1>}
      </div>

      {/* if else statement */}
      <div>{isVote}</div>

      {/* and operator */}
      <div>{isvalid && <h1>this is valid</h1>}</div>
    </div>
  );
};

export default App;
