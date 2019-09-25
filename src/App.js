import React, { Component } from "react";
import "./App.css";
import Input from "./components/Input";
import Weather from "./components/Weather";
import "bootstrap/dist/css/bootstrap.min.css";
class WeatherApp extends Component {
  state = {
    weather: [],
    city: "Rzeszow",
    cityName: "Rzeszow",
    weatherSectionClass: "weather"
  };
  handleOptionChange = e => {
    this.setState({
      city: e.target.value
    });
  };
  handleWeatherRender = e => {
    e.preventDefault();
    this.setState({
      weather: [],
      cityName: e.target.querySelector("select").options[
        e.target.querySelector("select").options.selectedIndex
      ].text,
      weatherSectionClass: "weather"
    });
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.state.city},pl&units=metric&appid=4879d336b1c4edb2ed496323d72fb969`
    )
      .then(resp => {
        return resp.json();
      })
      .then(data => {
        let weather = this.state.weather.concat(data);
        this.setState({ weather, weatherSectionClass: "weather active" });
      });
  };

  render() {
    return (
      <div className="inside">
        <div className="app">
          <Input
            option={this.state.city}
            change={this.handleOptionChange}
            submit={this.handleWeatherRender}
          />
          <Weather
            weather={this.state.weather}
            cityName={this.state.cityName}
            class={this.state.weatherSectionClass}
          />
        </div>
      </div>
    );
  }
}

export default WeatherApp;
