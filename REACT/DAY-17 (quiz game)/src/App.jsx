import React, { useState } from "react";
import Timer from "./components/Timer";
import Question from "./components/Question";
import Result from "./components/Result";

const App = () => {
  const [leftTime, setleftTime] = useState(20);
  const [istimeFinished, setistimeFinished] = useState(false);
  const [score, setscore] = useState(0);
  return (
    <main className="bg-gray-950 h-screen w-full text-white flex flex-col items-center">
      <div className="my-10">
        <Timer
          leftTime={leftTime}
          setleftTime={setleftTime}
          setistimeFinished={setistimeFinished}
        />
      </div>

      <div>
        {!istimeFinished ? (
          <Question
            finished={setistimeFinished}
            score={score}
            setscore={setscore}
            setleftTime={setleftTime}
            leftTime={leftTime}
          />
        ) : (
          <Result score={score} />
        )}
      </div>
    </main>
  );
};

export default App;
