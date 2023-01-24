import React from "react";
import "./index.css";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div class="container">
        <div class="weatherapp">
          <h1 id="city">Weather forecast</h1>
          <h2>Sunday</h2>

          <div id="humidity" class="humid">
            Humidity: 65%
          </div>
          <div class="windspeed" id="wind">
            Wind: 3km/h
          </div>

          <form id="search-form">
            <div class="search">
              <input
                type="text"
                placeholder="Type your city..."
                id="search-city-input"
              />
            </div>
            <input type="submit" class="btn btn-info" />
          </form>

          <div class="row">
            <div class="col">
              <img src="" class="main-image" id="icon" alt="" />
            </div>
            <div class="col">
              <div class="main-temp">
                <span id="temperature"></span>
                <span class="units">°C </span>
              </div>
            </div>
          </div>

          <div class="weather-week" id="forecast"></div>
        </div>
      </div>
      <small class="name">
        <a href="https://github.com/covicz/weather-react.git" target="">
          Open-source code
        </a>
        by Paulina Konieczkowicz
      </small>

      <script src="src/index.js"></script>
    </div>
  );
}
