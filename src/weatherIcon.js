import React from "react";

export default function WeatherIcon(props) {
  const iconUrl = `https://openweathermap.org/img/wn/${props.code}@2x.png`;

  return (
    <img
      src={iconUrl}
      alt={props.alt || "weather icon"}
      className="WeatherIcon" width={48}
    />
  );
}
