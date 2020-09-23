import React, { useEffect, useState } from "react";
import "./style/mainscreen.css";

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
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  }, [timeLeft]);

  return (
    <div className="main">
      <div className="">
        <h1>
          <i>You are invited to the wedding joining the lives of</i>
          <br />
        </h1>
      </div>
      <div>
        <h2>
          Miss Udita <br />
          &nbsp; &nbsp; &nbsp;to <br />
          Mr Manish <br />
          On Friday 11th december 2020
        </h2>
      </div>

      <div>
        <form>
          <div className="form-group row">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
              Name
            </label>
            <div className="col-sm-10">
              <input
                type="Text"
                className="form-control"
                id="inputEmail3"
                placeholder="Name"
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
              Email
            </label>
            <div className="col-sm-10">
              <input
                type="Email"
                className="form-control"
                id="inputPassword3"
                placeholder="Email"
              />
            </div>
          </div>

          <div className="form-group row">
            <div className="col-sm-10">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
        <div>
          <span>Days: {timeLeft ? timeLeft.days : ""}</span>

          <span> Hours:{timeLeft ? timeLeft.hours : ""}</span>

          <span> Minutes:{timeLeft ? timeLeft.minutes : ""}</span>

          <span> Seconds:{timeLeft ? timeLeft.seconds : ""}</span>
        </div>
      </div>
    </div>
  );
}
