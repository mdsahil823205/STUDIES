import React, { useState } from "react";

const App = () => {
  const [gender, setGender] = useState("");
  console.log(gender);

  function handleGender(e) {
    const { value } = e.target
    setGender(value)

  }
  return (
    <div>
      <label htmlFor="male">
        <input
          type="radio"
          name="gender"
          id="male"
          value="male"
          checked={gender === "male"}
          onChange={handleGender}
        />
        male
      </label>

      <label htmlFor="female">
        <input
          type="radio"
          name="gender"
          id="female"
          value="female"
          checked={gender === "female"}
          onChange={handleGender}
        />
        female
      </label>

      <label htmlFor="others">
        <input
          type="radio"
          name="gender"
          id="others"
          value="others"
          checked={gender === "others"}
          onChange={handleGender}
        />
        others
      </label>
    </div>
  );
};

export default App;
