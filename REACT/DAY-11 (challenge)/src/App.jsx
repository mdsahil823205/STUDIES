import React from "react";
import Card from "./components/Card";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div className="h-screen w-full text-white flex justify-center items-center">
      <Hero />
      <Card />
    </div>
  );
};

export default App;
