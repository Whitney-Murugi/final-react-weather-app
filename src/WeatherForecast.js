import React, { useState } from "react";
import axios from "axios";
import "./Weatherforecast.css";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setloaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.list);
    setloaded(true);
  }

  if (loaded) {
  return (
    <div className="WeatherForecast">
      <div className="row">
        {forecast.map(function (dailyForecast, index) {
          if (index % 8 === 0 && index < 40) {
            return (
              <div className="col" key={index}>
                <WeatherForecastDay data={dailyForecast} />
              </div>
            );
          } else {    
            return null;
          }
        })}
      </div>
    </div>
  );
}      
  else {
    const latitude = props.coordinates.lat;
    const longitude = props.coordinates.lon;
    const ApiKey = "2d96d64425dca1d6eda00d942a281c0d";
    const ApiURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${ApiKey}&units=metric`;

    axios.get(ApiURL).then(handleResponse);

    return "Loading...";
  }
}
