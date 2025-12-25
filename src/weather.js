import React, { useState } from "react";
import axios from "axios";
import "./weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weathers(props) {
  const [weatherData, setWeatherData] = useState({});
  const [ready, setReady] = useState(false);
  const [cities, setCities] = useState(props.deCity);

  function getResponse(response) {
    setWeatherData({
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      coordinates: response.data.coord,
      wind: response.data.wind.speed,
      city: response.data.name,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,              
      descriptions: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
    });

    setReady(true);
  }

  function search() {
    const ApiKey = "2d96d64425dca1d6eda00d942a281c0d";
    let ApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cities}&appid=${ApiKey}&units=metric`;
    axios.get(ApiUrl).then(getResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCities(event.target.value);
  }

  if (ready) {
    return (
      <div className="weathers">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city"
                className="search-form w-100"
                onChange={handleCityChange}
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
        <WeatherInfo data={weatherData} />
<WeatherForecast coordinates={weatherData.coordinates} key={weatherData.city} />
      </div>
    );
  } else {
    search();
    return "loading...";
  }
}
