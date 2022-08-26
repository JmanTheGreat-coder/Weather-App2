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
import "./App.css";
import UsersData from "./components/UsersData";

function App() {
  const [city, setCity] = useState("new york");
  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const convertF = (x) => {
    return convertC(x) * 1.8 + 32;
  };

  const convertC = (x) => {
    return x - 273.15;
  };

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await getFormattedWeatherData(city, units);
      setWeather(data);
    };
    fetchWeatherData(city);
  }, [city]);

  const enterKeyPressed = (e) => {
    if (e.keyCode === 13) {
      setCity(e.currentTarget.value);
      e.currentTarget.blur();
    }
  };

  return (
    <div className="App">
      {weather && (
        <div
          className={
            typeof weather.temp != "undefined"
              ? convertF(weather.temp) > 70
                ? "app warm"
                : "app"
              : "app"
          }
        >
          <div
            class="container"
            style={{ background: darkMode ? "#1a1919" : "white" }}
          >
            <div class="row">
              <div class="col-lg-4 col-md-4 col-sm-5 col-5 mb-4 mt-4">
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
              <div class="col-lg-8 col-md-8 col-sm-7 col-7 mb-4 mt-4">
                <div
                  class="card h-100 border-0"
                  style={{ background: darkMode ? "#1a1919" : "white" }}
                >
                  <div class="card-body">
                    <div class="row">
                      <div class="col-lg-6 col-md-6 col-6">
                        <img
                          src={require(`./resources/icon_${weather.icon}.png`)}
                          class="icon-photo"
                          alt="weatherIcon"
                        />
                      </div>
                      <div class="col-lg-6 col-md-6  col-6">
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

                    <div class="text-center">
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
                      <div className="toggle-theme">
                        <input
                          type="checkbox"
                          onChange={() => setDarkMode(!darkMode)}
                          className="checkbox"
                          id="chk"
                        />
                        <label className="label" htmlFor="chk">
                          <div className="sun">
                            <BsSun onClick={() => setUnits("imperial")} />
                          </div>
                          <div className="moon">
                            <BsFillMoonStarsFill
                              onClick={() => setUnits("metric")}
                            />
                          </div>
                          <div className="ball"></div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row ">
              <div
                class="card card-body border-0"
                style={{ background: darkMode ? "#1a1919" : "white" }}
              >
                <h1>Today's Highlights</h1>
              </div>
            </div>

            <div class="row">
              <div class="col-lg-4 col-md-6 col-sm-6 col-6 mb-4">
                <div
                  class="card h-100"
                  style={{ shadow: darkMode ? false : "0 4px 2px -2px gray" }}
                >
                  <div class="card-body box_info">
                    <span class="type-info">UV Index</span>
                    <div class="row">
                      <div className="current-weather-details-grid-item col-6">
                        <BsBroadcast size="3rem" />
                        <label>{weather.clouds.all}</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-6 col-6 mb-4">
                <div class="card h-100">
                  <div class="card-body box_info">
                    <span class="type-info">Wind Status</span>
                    <div class="row">
                      <div className="current-weather-details-grid-item col-6">
                        <BsWind size="3rem" />
                        <label>{weather.speed}</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-6 col-6 mb-4">
                <div class="card h-100">
                  <div class="card-body box_info">
                    <span class="type-info">Sunrise & Sunset</span>
                    <div class="row">
                      <div className="current-weather-details-grid-item ">
                        <BsSunrise size="1rem" />
                        <label>{weather.sunset}</label>
                      </div>
                    </div>
                    <div class="row">
                      <div className="current-weather-details-grid-item ">
                        <BsSunset size="1rem" />
                        <label>{weather.sunrise}</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-6 col-6 mb-4">
                <div class="card h-100">
                  <div class="card-body box_info">
                    <span class="type-info">Humidity</span>
                    <div class="row">
                      <div className="current-weather-details-grid-item col-6">
                        <BsDroplet size="3rem" />
                        <label>{weather.humidity}</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-6 col-6 mb-4">
                <div class="card h-100">
                  <div class="card-body box_info">
                    <span class="type-info">Pressure</span>
                    <div class="row">
                      <div className="current-weather-details-grid-item col-6">
                        <BsLifePreserver size="3rem" />
                        <label>{weather.pressure}</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-6 col-6 mb-4">
                <div class="card h-100">
                  <div class="card-body box_info">
                    <span class="type-info">Visibility</span>
                    <div class="row">
                      <div className="current-weather-details-grid-item col-8">
                        <BsFillEyeFill size="3rem" class="col-6" />
                        <label class="col-6">{weather.visibility}</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <UsersData city={city} units={units} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
