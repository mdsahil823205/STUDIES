import React from "react";

const Button = ({ color, children, setSelectColor, colorName }) => {
  function handleSetColor() {
    setSelectColor((prev) => (prev = color));
  }
  return (
    <button
      onClick={handleSetColor}
      className=" px-12 py-5 border-2 rounded-xl my-10 capitalize ml-3"
      style={{ backgroundColor: color }}
    >
      {children}
    </button>
  );
};

export default Button;
