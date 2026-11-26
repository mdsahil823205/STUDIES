import React, { useState } from "react";

const App = () => {
  const [selectPaymet, setselectPaymet] = useState("");
  console.log(selectPaymet)
  return (
    <div>
      {!selectPaymet && <p>please select mode</p>}
      <select
        value={selectPaymet}
        onChange={(e) => {
          setselectPaymet(e.target.value);
        }}
      >
        <option value="">--select payment--</option>
        <option value="upi">upi</option>
        <option value="cod">cod</option>
        <option value="card">card</option>
      </select>

    </div>
  );
};

export default App;
