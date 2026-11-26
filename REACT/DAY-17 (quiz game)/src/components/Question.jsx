import React, { useState } from "react";
import question from "../data/question.json";
const Question = ({ finished, score, setscore, setleftTime }) => {
  const [currentIndex, setcurrentIndex] = useState(0)
  function handleOption(selectedOption) {
    if (selectedOption === question[currentIndex].answer) {
      setscore((prev) => prev + 1)
      console.log(score)
    }
    if (currentIndex + 1 < question.length) {
      setcurrentIndex((prev) => prev + 1)
    } else {
      finished(true)
      setleftTime((prev) => prev = 0)
      console.log("khatam")
    }
  }
  return (
    <div>
      <h1 className="text-5xl">{question[currentIndex].question}</h1>
      <div className="flex flex-col gap-10 mt-10">
        {question[currentIndex].options.map((option) => {
          return (
            <button
              className=" border border-amber-100 py-5 rounded-xl capitalize text-2xl hover:bg-[black] hover:cursor-pointer"
              key={option}
              onClick={() => {
                console.log(option);
                handleOption(option)
              }}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Question;
