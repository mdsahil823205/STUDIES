import React, { useState } from "react";
import Button from "./components/Button";
import ColorBox from "./components/ColorBox";
const colors = [
  { name: "Crimson Red", hex: "#DC2626" },
  { name: "Ocean Blue", hex: "#2563EB" },
  { name: "Emerald Green", hex: "#059669" },
  { name: "Sunset Orange", hex: "#EA580C" },
  { name: "Royal Purple", hex: "#7C3AED" },
];
const App = () => {
  const [selectColor, setSelectColor] = useState("transparent");
  return (
    <div className="bg-gray-950 h-screen w-full text-white flex items-center gap-2.5 flex-col p-7 capitalize">
      {/* heading start */}
      <h1 className=" text-7xl"> 🎨 color changer game</h1>
      {/* heading end */}

      {/* button start */}
      <div>
        {colors.map((elem, index) => (
          <Button
            color={elem.hex}
            key={index}
            colorName={elem.name}
            setSelectColor={setSelectColor}
          >
            {elem.name}
          </Button>
        ))}
      </div>
      {/* button end */}

      {/* colorbox start */}
      <div>
        <ColorBox selectColor={selectColor} />
      </div>
      {/* colorbox end */}
    </div>
  );
};

export default App;
