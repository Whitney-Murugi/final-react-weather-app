import React from "react";
import WeatherIcon from "./weatherIcon";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="Weather-forecast-day">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} />
      <div className="Weather-forecast-temp">
        <span className="max-temp">
          {Math.round(props.data.main.temp_max)}°
        </span>
        <span className="min-temp">
          {Math.round(props.data.main.temp_min)}°
        </span>
      </div>
    </div>
  );
}
