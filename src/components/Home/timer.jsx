import React, { useState, useEffect } from 'react';
import './timer.css'

const CountdownTimer = ({ deadline }) => {
  const [timeLeft, setTimeLeft] = useState(deadline - Date.now());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(deadline - Date.now());
    }, 1000);

    return () => clearInterval(intervalId);
  }, [deadline]);

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return (
    <div className="countdown-timer">
      <div className="time-section">
        <div className="time-value">{days}</div>
        <div className="time-label">Days</div>
      </div>
      <div className="time-section">
        <div className="time-value">{hours}</div>
        <div className="time-label">Hours</div>
      </div>
      <div className="time-section">
        <div className="time-value">{minutes}</div>
        <div className="time-label">Minutes</div>
      </div>
      <div className="time-section">
        <div className="time-value">{seconds}</div>
        <div className="time-label">Seconds</div>
      </div>
    </div>
  );
};

export default CountdownTimer;

