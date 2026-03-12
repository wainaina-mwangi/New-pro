import React, { useState, useEffect } from "react";

const StatCounter = ({ target, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp = null;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;

      // Calculate how much time has passed
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);

      // Calculate the current number based on progress
      setCount(Math.floor(progress * target));

      // If we haven't reached the end, keep animating
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [target, duration]);

  return (
    <div style={{ fontSize: "3rem", fontWeight: "bold", color: "#61dafb" }}>
      {count.toLocaleString()}
    </div>
  );
};

export default StatCounter;
