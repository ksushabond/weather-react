import React from "react";
import "./City.css";

export default function City() {
  let weatherData = {
    city: "Odessa",
    date: "Tuesday 10:45",
    temperature: 10,
    description: "Sunny",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 50,
    wind: 5,
  };
  return (
    <div className="City">
      <h1>{weatherData.city}</h1>

      <h2>
        Last updated:
        <br />
        {weatherData.date}
      </h2>

      <div className="row">
        <div className="col-md-2">
          <img
            src={weatherData.imgUrl}
            alt={weatherData.description}
            width="70"
          />
        </div>
        <div className="col-md-4">
          <div className="weather-temperature">
            <strong>{weatherData.temperature}</strong>
            <span className="units">
              <a href="#">°C</a> |<a href="#">F</a>
            </span>
          </div>
        </div>
        <div className="col-md-6">
          <ul>
            <li>{weatherData.description}</li>
            <li>
              Humidity: <span>{weatherData.humidity}</span>%
            </li>
            <li>
              Wind: <span>{weatherData.wind}</span> km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
