import React from "react";

const Navbar = ({ data, count, setCount }) => {
  console.log(data);
  function countHandler() {
    setCount(count + 1);
  }
  return (
    <div>
      <p>{count}</p>
      <button onClick={countHandler}>count increase</button>
      <div>
        {data.map((e) => {
          return(
            <div>
              {e.name}
              <br />
              {e.age}
              {e.city}
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Navbar;
