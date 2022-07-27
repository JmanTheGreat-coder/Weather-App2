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
import React, { useState } from "react";
import Sun from "./resources/icon_01d_n.png";
import axios from "axios";
import "./App.css";

function App() {
  //const url = `https://api.openweathermap.org/data/2.5/weather?q=miami&appid=9195141314df48e526b2fbeff8bff2f5`

  return (
    <div className="App">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-6 col-sm-6 col-6">
            <div class="card">
              <div class="card-body current-weather">
                <h1>Miami</h1>
                <h6>Florida</h6>
                <p>Thursday, 12 May 2022 03:16</p>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6 col-6">
            <div class="card h-100">
              <div class="card-body">
                <BsSun />
                <BsFillMoonStarsFill />
                <input
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
          <div class="col-lg-6 col-md-6 col-sm-12 col-12">
            <div class="card">
              <div class="card-body">
                <img src={Sun} className="icon photo " />
                <h1>65</h1>
                <label>Feels like: 68°</label>
                <label>clear sky</label>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-12 col-12">
            <div class="card h-100">
              <div class="card-body">
                <div class='current-weather'>
                  <div className="current-weather-details-grid-item">
                    <label>Rain:</label>
                    <label>0.00%</label>
                  </div>
                  <div className="current-weather-details-grid-item">
                    <label>Humidity:</label>
                    <label>50%</label>
                  </div>
                  <div className="current-weather-details-grid-item">
                    <label>Wind speed:</label>
                    <label>8 m/s</label>
                  </div>
                </div>
                <div class='current-weather2'>
                                  <div className="current-weather-details-grid-item">
                  <label>Pressure:</label>
                  <label>1020hPa</label>
                </div>
                <div className="current-weather-details-grid-item">
                  <label>Wind speed:</label>
                  <label>10 km</label>
                </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-12">
            <div class="card">
              <div class="card-body">
                <h2>Today</h2>
                <h2>Week</h2>
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
                <img src={Sun} className="icon photo " />
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
            <div class="card">
              <div class="card-body">
                <span class="type-info">UV Index</span>
                <BsBroadcast />
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-6 col-6">
            <div class="card">
              <div class="card-body">
              <span class="type-info">Wind Status</span>
                <BsWind />
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-6 col-6">
            <div class="card">
              <div class="card-body">
              <span class="type-info">Sunrise & Sunset
</span>
                <BsSunrise />
                <BsSunset />
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-6 col-6">
            <div class="card">
              <div class="card-body">
              <span class="type-info">Humidity
</span>
                <BsDroplet />
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-6 col-6">
            <div class="card">
              <div class="card-body">
              <span class="type-info">Pressure</span>
                <BsLifePreserver />
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-6 col-6">
            <div class="card">
              <div class="card-body">
              <span class="type-info">Visibility
</span>
                <BsFillEyeFill />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
