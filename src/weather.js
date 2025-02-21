import React, { useState } from "react";
import axios from "axios";
import "./weather.css";

export default function Weathers() {
  const [weatherData, setWeatherData] = useState({});
  const [ready, setReady] = useState(false);

  function getResponse(response) {
    console.log(response.data.weather[0].description);
    setWeatherData({
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      descriptions: response.data.weather[0].description,
      date: "Wednesday 07:00hrs",
    });

    setReady(true);
  }

  if (ready) {
    return (
      <div className="weathers">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city"
                className="search-form w-100"
                required
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="search"
                className="btn btn-danger w-100"
              />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li>{weatherData.date}</li>
          <li>{weatherData.descriptions}</li>
        </ul>
        <div className="row">
          <div className="col-6 clear-fix">
            <img
              src={weatherData.iconUrl}
              width="80px"
              alt={weatherData.descriptions}
              className="float-left"
            ></img>
            <span className="float-left">
              <span className="temperature">{weatherData.temperature}</span>
              <span className="unit">℃|℉</span>
            </span>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity:{weatherData.humidity}%</li>
              <li>Wind:{weatherData.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const ApiKey = "2d96d64425dca1d6eda00d942a281c0d";
    let city = "New York";
    let ApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}&units=metric`;
    axios.get(ApiUrl).then(getResponse);

    return "loading...";
  }
}
