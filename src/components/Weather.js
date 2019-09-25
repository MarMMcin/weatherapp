import React from "react";
import "./Weather.css";
const Weather = props => {
  const weather = props.weather.map(city => {
    return (
      <div key={city.id} className="results">
        <h2>In {props.cityName} we have:</h2>
        <ul>
          <ul className="info">
            <li>
              Temperature: <i>{city.main.temp.toFixed()}&deg;C</i>
            </li>
            <li>
              Air humidity: <i>{city.main.humidity}%</i>
            </li>
            <li>
              Atmospheric pressure: <i>{city.main.pressure} hPa</i>
            </li>
            <li>
              Wind speed: <i>{city.wind.speed} m/s</i>
            </li>
          </ul>
          <div className="images">
            <img
              src={`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`}
              alt="weather icon"
            />
          </div>
          <div className="descr">
            <p className="description">{city.weather[0].description}</p>
          </div>
        </ul>
      </div>
    );
  });
  return <section className={props.class}>{weather}</section>;
};

export default Weather;
