import React from "react";

const SecondsCounter = (props) => {
  const secondsString = String(props.seconds).padStart(5, "0");

  return (
    <div className="container text-center bg-dark text-white p-4 rounded-4">
      <div className="row row-cols-6 g-2 g-lg-3">
        <div className="col">
          <div className="p-3">
            <i className="bi bi-clock-fill fs-1"></i>
          </div>
        </div>
        <div className="col">
          <div className="p-3 fs-1">{secondsString[0]}</div>
        </div>
        <div className="col">
          <div className="p-3 fs-1">{secondsString[1]}</div>
        </div>
        <div className="col">
          <div className="p-3 fs-1">{secondsString[2]}</div>
        </div>
        <div className="col">
          <div className="p-3 fs-1">{secondsString[3]}</div>
        </div>
        <div className="col">
          <div className="p-3 fs-1">{secondsString[4]}</div>
        </div>
      </div>
    </div>
  );
};

export default SecondsCounter;
