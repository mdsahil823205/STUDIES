import React, { useState } from "react";
import Button from "./Button";

const App = () => {
  const [count, setCount] = useState(0);
  function Increment() {
    setCount(count + 1);
  }
  function Decrement() {
    if (count >= 1) {
      setCount(count - 1)
    }
  }
  function Reset() {
    setCount(0);
  }
  return (
    <div>
      <h1>counter app</h1>
      <p>{count}</p>
      <Button text="incremnt" func={Increment} />
      <Button text="decrement" func={Decrement} />
      <Button text="reset" func={Reset} />
    </div>
  );
};

export default App;
