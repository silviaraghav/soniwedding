import React, { useEffect, useState, Fragment } from "react";
import "./style/mainscreen.css";
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
    <Fragment>
      <img
        src="/img1.jpg"
        alt="wedding"
        style={{ width: "100vw", height: "50vh" }}
      />

      <div className="main">
        <div className="disc">
          <span>
            You are invited to the wedding joining the lives of <br />
            <b>Miss Udita &amp; Mr Manish </b> <br />
            On Friday 11th december 2020
          </span>
        </div>
        {/* <form>
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
        </form> */}

        <div class="count-down">
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
    </Fragment>
  );
}
