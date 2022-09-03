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
import background, { gradient } from "./background";

function App() {
  const [city, setCity] = useState("miami");
  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState("");
  const [grad, setgrad] = useState(null);
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
        <div class={weather.main}>
          <div
            class="container-fluid `${weather.main}`"  
            
          >
            <div class="row">
              <div class="col-lg-4 col-md-4 col-sm-4 col-12 mb-4 mt-4">
                <div class="card h-100 border-0">
                  <div class="card-body ">
                  <h1>{weather.main}</h1>
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
                      class="location mb-2 mr-4"
                      type="text"
                      id="fname"
                      name="fname"
                    ></input>
                  </div>
                </div>
              </div>
              <div class="col-lg-8 col-md-8 col-sm-8 col-12 mb-4 mt-4">
                <div class="card h-100 border-0">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-lg-6 col-md-6 col-6">
                        <img
                          src={require(`./svg/icon_${weather.icon}.svg`)}
                          class="icon-photo"
                          alt="weatherIcon"
                        />
                      </div>
                      <div class="col-lg-6 col-md-6  col-6">
                        <h1>
                          {units === "metric"
                            ? convertF(weather.temp).toFixed(0)
                            : convertC(weather.temp).toFixed(0)}
                          °{units === "metric" ? "F" : "C"}
                        </h1>
                        <label>
                          Feels like:
                          {units === "metric"
                            ? convertF(weather.feels_like).toFixed(0)
                            : convertC(weather.feels_like).toFixed(0)}
                          °{units === "metric" ? "F" : "C"}°
                        </label>
                        <br />
                        <label>{weather.description}</label>
                      </div>
                    </div>
                    <div class="card-body text-center bold">
                      <a onClick={() => setUnits("imperial")}>°C</a> /
                      <a onClick={() => setUnits("metric")}>°F</a>
                    </div>

                    <div class="text-center"></div>
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
