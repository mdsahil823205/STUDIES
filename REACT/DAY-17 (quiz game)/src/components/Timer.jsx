import React, { useEffect, useState } from "react";

const Timer = ({ leftTime, setleftTime, setistimeFinished }) => {
  const [displayTime, setDisplayTime] = useState(null);

  useEffect(() => {
    let interval = setInterval(() => {
      setleftTime((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  if (leftTime === 0) {
    setistimeFinished(true)
  }

  useEffect(() => {
    let min = `${Math.floor(leftTime / 60)}`.padStart(2, 0);
    let sec = `${Math.floor(leftTime % 60)}`.padStart(2, 0);
    let displayTime = `${min}:${sec}`;
    setDisplayTime(displayTime);
  }, [leftTime]);

  return <div className=" text-3xl capitalize">Time left: {displayTime}</div>;
};

export default Timer;
