import React from "react";
import FormatDate from "./FormatDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormatDate date={props.data.date} />
        </li>
        <li>{props.data.descriptions}</li>
      </ul>
      <div className="row">
        <div className="col-6 clearfix">
          <img
            src={props.data.iconUrl}
            width="80px"
            alt={props.data.descriptions}
            className="float-left"
          ></img>
          <span className="float-left">
            <WeatherTemperature celcius={props.data.temperature}/>
          </span>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity:{props.data.humidity}%</li>
            <li>Wind:{props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
