import React from "react";

const ColorBox = ({ selectColor }) => {
  return (
    <div
      style={{
        background: selectColor,
      }}
      className=" border-2 h-80 w-80 flex justify-center items-center rounded-xl"
    >
      {selectColor}
    </div>
  );
};

export default ColorBox;
