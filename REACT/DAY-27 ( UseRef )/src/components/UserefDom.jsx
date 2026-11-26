import React, { useRef } from "react";

const App = () => {
  const boxRef = useRef()
  console.log(boxRef)
  function handleChange() {
    boxRef.current.style.backgroundColor = "blue"
    boxRef.current.style.borderRadius = "10%"
    boxRef.current.style.display = "flex"
    boxRef.current.style.justifyContent = "center"
    boxRef.current.style.alignItems = "center"
    boxRef.current.innerText = "hello"
    boxRef.current.style.fontWeight = "bold"
    boxRef.current.style.textTransform = "upperCase"
    boxRef.current.click()


  }
  return (
    <div className="h-screen w-full bg-gray-950 text-white flex justify-center items-center gap-3 flex-col">
      <div
        className="h-[500px] w-[500px] bg-red-700"
        ref={boxRef}
        onClick={() =>
          console.log("div pe click hua hai ")
        }
      >

      </div>
      <button
        className="px-10 py-5 border-2 rounded-xl"
        onClick={handleChange}

      >
        click
      </button>
    </div>
  );
};

export default App;
