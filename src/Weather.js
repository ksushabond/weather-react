import React from "react";
import axios from "axios";
import { Audio } from "react-loader-spinner";

import "./Weather.css";

export default function Weather(props) {
  function displayWeather(response) {}
  let apiKey = "094780c710fa4efd669f0df8c3991927";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);

  return (
    <div className="Loader">
      <Audio
        height="50"
        width="50"
        radius="9"
        color="orange"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
    </div>
  );
}
