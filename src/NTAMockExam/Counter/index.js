import React, { useEffect, useState } from "react";

const CountdownTimer = ({ initialMinutes = 120 }) => {
  const [timeLeft, setTimeLeft] = useState(initialMinutes * 60); // in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer); // cleanup on unmount
  }, []);

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, "0")}:${m
      .toString()
      .padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <div style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#e91e63" }}>
      Time Left: {formatTime(timeLeft)}
    </div>
  );
};

export default CountdownTimer;
