import React from "react";
import axios from "axios";

import "./Weatherforecast.css";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  console.log(props);

  const iconUrl = "https://openweathermap.org/img/wn/01d@2x.png";
  const latitude = props.coordinates.lon;
  const longitude = props.coordinates.lat;
  const ApiKey = "2d96d64425dca1d6eda00d942a281c0d";
  const ApiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${ApiKey}`;

  axios.get(ApiURL).then(handleResponse);

  return (
    <div className="WeatherForecast">
      {" "}
      <div className="row">
        {" "}
        <div className="col">
          {" "}
          <div className="Weather-forecast-day">Thu</div>{" "}
          <img src={iconUrl} alt="Sunny" width="50" />
          <div className="Weather-forecast-temp">
            <span className="max-temp">19</span>
            <span className="min-temp">10</span>
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
