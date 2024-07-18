import React, { useState, useEffect } from "react";

export default function Times({ endTime }) {
  const [days, setDays] = useState("0");
  const [hours, setHours] = useState("0");
  const [minutes, setMinutes] = useState("0");
  const [seconds, setSeconds] = useState("0");

  function getTime() {
    const time = Date.parse(endTime) - Date.now();
    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  }

  useEffect(() => {
    const interval = setInterval(() => getTime(endTime), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <h4>{days < 10 ? "0" + days : days}</h4>
            <span>Days</span>
          </div>
          <div className="col-3">
            <h4>{hours < 10 ? "0" + hours : hours}</h4>
            <span>Hours</span>
          </div>
          <div className="col-3">
            <h4>{minutes < 10 ? "0" + minutes : minutes}</h4>
            <span>Minutes</span>
          </div>
          <div className="col-3">
            <h4>{seconds < 10 ? "0" + seconds : seconds}</h4>
            <span>Seconds</span>
          </div>
        </div>
      </div>
    </div>
  );
}
