import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, SetUnit] = useState("celcius");

  function changeToFarenheit(event) {
    event.preventDefault();
    SetUnit("Farenheit");
  }

  function changeToCelcius(event) {
    event.preventDefault();
    SetUnit('celcius');
  }

  if (unit === "celcius") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{props.celcius}</span>
        <span className="unit">
          ℃ |
          <a href="/" onClick={changeToFarenheit}>
            {" "}
            ℉
          </a>
        </span>
      </div>
    );
  } else {
    let Farenheit = (props.celcius * 9) / 5 + 32;
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Farenheit}</span>
        <span className="unit">
          <a href="/" onClick={changeToCelcius}>
            {" "}
            ℃
          </a>
          | ℉
        </span>
      </div>
    );
  }
}
