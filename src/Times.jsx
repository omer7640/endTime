import React, { useState, useEffect } from "react";
import Countdown from "./Countdown";
export default function Times({ endTime }) {
  const { days, hours, minutes, seconds } = Countdown(endTime);
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
