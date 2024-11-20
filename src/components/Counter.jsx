import { useState, useEffect } from "react";

function Counter({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = new Date(targetDate) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="md:flex items-center gap-16 flex-wrap text-base grid grid-cols-2">
      <div>
        <h1 className="flex flex-col">
          <span className="text-7xl md:text-[6vw]">{String(timeLeft.days).padStart(2, "0")}</span>
          Days
        </h1>
      </div>
      <div>
        <h1 className="flex flex-col">
          <span className="text-7xl md:text-[6vw]">{String(timeLeft.hours).padStart(2, "0")}</span>
          Hours
        </h1>
      </div>
      <div>
        <h1 className="flex flex-col">
          <span className="text-7xl md:text-[6vw]">{String(timeLeft.minutes).padStart(2, "0")}</span>
          Minutes
        </h1>
      </div>
      <div>
        <h1 className="flex flex-col">
          <span className="text-7xl md:text-[6vw]">{String(timeLeft.seconds).padStart(2, "0")}</span>
          Seconds
        </h1>
      </div>
    </div>
  );
}

export default Counter;
