import React from "react";
import "./weather.css";

export default function Weathers() {
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
      <h1>Lisbon</h1>
      <ul>
        <li>Wednesday 0700hrs</li>
        <li>Mostly cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6 clear-fix">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBbhLPaSH_zQB3RNv5CSBBtr10RCauZP0Ytg&s"
            width="80px"
            alt="cloudy-weather"
            className="float-left"
          ></img>
          <span className="float-left">
            <span className="temperature">6</span>
            <span className="unit">℃|℉</span>
          </span>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation:15%</li>
            <li>Humidity:72%</li>
            <li>Wind:10 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
