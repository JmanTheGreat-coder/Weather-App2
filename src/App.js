import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BsSun } from "react-icons/bs";
import { BsSunset } from "react-icons/bs";
import { BsSunrise } from "react-icons/bs";
import { BsWind } from "react-icons/bs";
import { BsLifePreserver } from "react-icons/bs";
import { BsBroadcast } from "react-icons/bs";
import { BsDroplet } from "react-icons/bs";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { BsFillEyeFill } from "react-icons/bs";
import React, { useEffect, useState } from "react";
import { getFormattedWeatherData } from "./weatherService.js";
import { getFormattedWeatherData2 } from "./weatherService2.js";
import "./App.css";

function App() {
  const [city, setCity] = useState("new york");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [units, setUnits] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [color, setColor] = useState('white');


  const convertF = (x) => {
    return convertC(x) * 1.8 + 32;
  };

  const convertC = (x) => {
    return x - 273.15;
  };

  console.log(units);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await getFormattedWeatherData(city, units);
      setWeather(data);
    };
    fetchWeatherData(city);
  }, [city]);


  useEffect(() => {
    const fetchWeatherData2 = async () => {
      const data = await getFormattedWeatherData2(city);
      setForecast(data)
    };
    console.log(fetchWeatherData2)
    fetchWeatherData2(city);
  }, [city]);
 

  const enterKeyPressed = (e) => {
    if (e.keyCode === 13) {
      setCity(e.currentTarget.value);
      e.currentTarget.blur();
    }
  };


  return (
    <div className='App'>
      {weather && (
        <div className={(typeof weather.temp != "undefined") ? ((convertF(weather.temp) > 70) ? 'app warm' : 'app') : 'app'}>
          <div class="container" style={{ background: darkMode ? "#1a1919" : "white" }}>
            <div class="row">
              <div class="col-lg-3 col-md-6 col-sm-6 col-6 mb-4 mt-4">
                <div
                  class="card h-100 border-0"
                  style={{ background: darkMode ? "#1a1919" : "white" }}
                >
                  <div class="card-body ">
                    <h1>{`${weather.name}`}</h1>
                    <h6>{weather.country}</h6>
                    <p>
                      {new Date().toLocaleString("en-US", { weekday: "long" })}
                    </p>
                    <p>
                      {new Date().toLocaleString("en-US", {
                        hour: "numeric",
                        minute: "numeric",
                        hour12: true,
                      })}
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-6 col-6 mb-4 mt-4">
                <div
                  class="card h-100 border-0"
                  style={{ background: darkMode ? "#1a1919" : "white" }}
                >
                  <div class="card-body">
                    <div class="">
                      <h1>
                        {units === "metric"
                          ? convertF(weather.temp).toFixed(0)
                          : convertC(weather.temp).toFixed(0)}
                      </h1>
                      <p>{units === "metric" ? "F" : "C"}</p>
                      <label>
                        Feels like:
                        {units === "metric"
                          ? convertF(weather.feels_like).toFixed(0)
                          : convertC(weather.feels_like).toFixed(0)}
                        °
                      </label>
                      <br />
                      <label>{weather.description}</label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-6 col-6 mb-4 mt-4">
                <div
                  class="card h-100 border-0"
                  style={{ background: darkMode ? "#1a1919" : "white" }}
                >
                  <div class="card-body">
                    <img
                      src={require(`./resources/icon_${weather.icon}.png`)}
                      class="icon-photo"
                      alt="weatherIcon"
                    />
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 col-sm-6 col-6 mb-4 mt-4">
                <div
                  class="card h-100 border-0 "
                  style={{ background: darkMode ? "#1a1919" : "white" }}
                >
                  <div class="card-body">
                    <div class="row">
                      <div class="col-6">
                      <div class="">
                      <h4
                        class={` ${
                          units === "imperial" ? "units__active" : ""
                        }`}
                        onClick={() => setUnits("imperial")}
                      >
                        °C
                      </h4>
                      <h4
                        class={` ${units === " metric" ? "units__active" : ""}`}
                        onClick={() => setUnits("metric")}
                      >
                        °F
                      </h4>
                    </div>
                      </div>
                      <div class="col-6">
                      <div className="toggle-theme">
                        <input
                          type="checkbox"
                          onChange={() => setDarkMode(!darkMode)}
                          className="checkbox"
                          id="chk"
                        />
                        <label className="label" htmlFor="chk">
                          <div className="sun">
                            <BsSun />
                          </div>
                          <div className="moon">
                            <BsFillMoonStarsFill />
                          </div>
                          <div className="ball"></div>
                        </label>
                      </div>
                      </div>
                    </div>
                    <input
                      onKeyDown={enterKeyPressed}
                      class="location"
                      type="text"
                      id="fname"
                      name="fname"
                      placeholder="Enter your location"
                    ></input>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
