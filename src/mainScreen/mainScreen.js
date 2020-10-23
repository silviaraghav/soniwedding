import React, { useEffect, useState, Fragment } from "react";
import "./style/mainscreen.css";
import Map from "./map_creation";
// import Img from "./img1.jpg";

export default function MainScreen() {
  const calculateTimeLeft = () => {
    let difference = +new Date(`12/11/2020`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  }, [timeLeft]);

  return (
    <div className=''>
      <div>
      <img
        src="/img1.jpg"
        alt="wedding"
        style={{ width: "100vw", height: "50vh" }}
      />
      </div>
      <div className="main">
        <div className="count-down">
          <div className="timer-disc">
            <span>We are Waiting for...The Big Day</span>
          </div>
          <div className="timer">
            <span className="">
              Days: <br />
              {timeLeft ? timeLeft.days : ""}
            </span>
          </div>
          <div className="timer">
            <span className="">
              Hours:
              <br />
              {timeLeft ? timeLeft.hours : ""}
            </span>
          </div>
          <div className="timer">
            <span className="">
              Minutes:
              <br />
              {timeLeft ? timeLeft.minutes : ""}
            </span>
          </div>
          <div className="timer">
            <span className="">
              Seconds:
              <br />
              {timeLeft ? timeLeft.seconds : ""}
            </span>
          </div>
        </div>
        </div>

        <div className='mapp'>
          <Map ></Map>
        </div>
      
    </div>
  );
}
