import React, { useRef } from "react";

const App = () => {
  const h1Ref = useRef();
  console.log(h1Ref);
  return (
    <div>
      <input
        ref={h1Ref}
        type="text"
        placeholder="enter email"
        onChange={() => {}}
      />
    </div>
  );
};

export default App;
