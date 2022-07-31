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
import "./resources/icon_01d_n.png";
import { getFormattedWeatherData } from "./weatherService.js";
import "./App.css";

function App() {
  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState("");

  const convertF = (x) => {
    return convertC(x) * 1.8 + 32;
  };

  const convertC = (x) => {
    return x - 273.15;
  };

  console.log(units);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await getFormattedWeatherData("miami", units);
      setWeather(data);
    };
    fetchWeatherData();
  }, []);

  return (
    <div className="App">
      {weather && (
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-3 col-sm-3 col-3">
              <div class="card">
                <div class="card-body current-weather">
                  <h1>{`${weather.name}`}</h1>
                  <h6>{weather.country}</h6>
                  <p>Thursday, 12 May 2022 03:16</p>
                </div>
              </div> 
            </div>
            <div class="col-lg-3 col-md-3 col-sm-3 col-3">
              <div class="card">
                <div class="card-body current-weather">
                <div class="current-weather2">
                    <h1>
                      {units === "metric"
                        ? convertF(weather.temp).toFixed(0)
                        : convertC(weather.temp).toFixed(0)}
                    </h1>
                    <p>{units === 'metric' ? 'F' : 'C'}</p>
                    <label>Feels like: 
                    {units === "metric"
                        ? convertF(weather.feels_like).toFixed(0)
                        : convertC(weather.feels_like).toFixed(0)}
                    °</label>
                    <br />
                    <label>{weather.description}</label>
                  </div>
                </div>
              </div> 
            </div>
            <div class="col-lg-3 col-md-3 col-sm-3 col-3">
              <div class="card">
                <div class="card-body current-weather">
                <img
                    src={require(`./resources/icon_${weather.icon}.png`)}
                    class="icon-photo"
                    alt="weatherIcon"
                  />
                </div>
              </div> 
            </div>
            
            <div class="col-lg-3 col-md-3 col-sm-3 col-3">
              <div class="card h-100">
                <div class="card-body">
                  <div class="current-weather2">
                    <span
                      class={` ${units === "imperial" ? "units__active" : ""}`}
                      onClick={() => setUnits("imperial")}
                    >
                      °C
                    </span>
                    <span
                      class={` ${units === " metric" ? "units__active" : ""}`}
                      onClick={() => setUnits("metric")}
                    >
                      °F
                    </span>
                    <div className="toggle-theme">
                      <input type="checkbox" className="checkbox" id="chk" />
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

                  <input
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


          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-12">
              <div class="card">
                <div class="card-body">
                  <div class="row">
                    <div class="col-6">
                      <h2>Today</h2>
                    </div>
                    <div class="col-6">
                      <h2>Week</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="card-group card-group-scroll card border-0">
              <div class="card">
                <img class="card-img-top" data-src="holder.js/100px180/" />
                <div class="card-body">
                  <h5 class="card-title">Thu</h5>

                  <p class="card-text">
                    <small class="text-muted">59°F / 83°F</small>
                  </p>
                </div>
              </div>
              <div class="card">
                <img class="card-img-top" data-src="holder.js/100px180/" />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    This card has supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <p class="card-text">
                    <small class="text-muted">Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
              <div class="card">
                <img class="card-img-top" data-src="holder.js/100px180/" />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    This card has supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <p class="card-text">
                    <small class="text-muted">Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
              <div class="card">
                <img class="card-img-top" data-src="holder.js/100px180/" />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    This card has supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <p class="card-text">
                    <small class="text-muted">Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
              <div class="card">
                <img class="card-img-top" data-src="holder.js/100px180/" />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    This card has supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <p class="card-text">
                    <small class="text-muted">Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
              <div class="card">
                <img class="card-img-top" data-src="holder.js/100px180/" />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This card has even longer
                    content than the first to show that equal height action.
                  </p>
                  <p class="card-text">
                    <small class="text-muted">Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
              <div class="card">
                <img class="card-img-top" data-src="holder.js/100px180/" />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    This card has supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <p class="card-text">
                    <small class="text-muted">Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h1>Today's Highlights</h1>
          <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-6 col-6">
              <div class="card h-100">
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
            <div class="col-lg-4 col-md-4 col-sm-6 col-6">
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
            <div class="col-lg-4 col-md-4 col-sm-6 col-6">
              <div class="card  h-100">
                <div class="card-body box_info">
                  <span class="type-info">Sunrise & Sunset</span>
                  <div class="row">
                    <div className="current-weather-details-grid-item col-6">
                      <BsSunrise size="2rem" />
                      <label>{weather.sunset}</label>
                    </div>
                  </div>
                  <div class="row">
                    <div className="current-weather-details-grid-item col-6">
                      <BsSunset size="2rem" />
                      <label>{weather.sunrise}</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6 col-6">
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
            <div class="col-lg-4 col-md-4 col-sm-6 col-6">
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
            <div class="col-lg-4 col-md-4 col-sm-6 col-6">
              <div class="card h-100">
                <div class="card-body box_info">
                  <span class="type-info">Visibility</span>
                  <div class="row">
                    <div className="current-weather-details-grid-item col-6">
                      <BsFillEyeFill size="3rem" />
                      <label>{weather.visibility}</label>
                    </div>
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
