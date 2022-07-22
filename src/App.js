import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BsSun } from 'react-icons/bs';
import { BsSunset } from 'react-icons/bs';
import { BsSunrise } from 'react-icons/bs';
import { BsWind } from 'react-icons/bs';
import { BsLifePreserver } from 'react-icons/bs';
import { BsBroadcast } from 'react-icons/bs';
import { BsDroplet } from 'react-icons/bs';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { BsFillEyeFill } from 'react-icons/bs';
import React, { useState } from "react";
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
              <div class="card-body">
                <h2>Miami</h2>
                <h6>Florida</h6>
                <p>Thursday, 12 May 2022 03:16</p>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6 col-6">
            <div class="card">
              <div class="card-body">
                <BsSun />
                <BsFillMoonStarsFill />
                <input type="text" id="fname" name="fname"></input>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6 col-md-6 col-sm-12 col-12">
            <div class="card">
              <div class="card-body">This is some text within a card body.</div>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-12 col-12">
            <div class="card">
              <div class="card-body">This is some text within a card body.</div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-12">
            <div class="card">
              <div class="card-body">This is some text within a card body.</div>
            </div>
          </div>
        </div>
        <div class='row'>
        <div class="card-group card-group-scroll">
        <div class="card">
            <img class="card-img-top" data-src="holder.js/100px180/" />
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div>
        <div class="card">
            <img class="card-img-top" data-src="holder.js/100px180/" />
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div>
        <div class="card">
            <img class="card-img-top" data-src="holder.js/100px180/" />
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div>
        <div class="card">
            <img class="card-img-top" data-src="holder.js/100px180/" />
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div>
    </div>
        </div>
        <div class="row">
          <div class="col-lg-4 col-md-4 col-sm-6 col-6">
            <div class="card">
              <div class="card-body"><BsBroadcast /></div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-6 col-6">
            <div class="card">
              <div class="card-body"><BsWind /></div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-6 col-6">
            <div class="card">
              <div class="card-body"><BsSunrise /><BsSunset /></div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-6 col-6">
            <div class="card">
              <div class="card-body"><BsDroplet /></div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-6 col-6">
            <div class="card">
              <div class="card-body"><BsLifePreserver /></div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-6 col-6">
            <div class="card">
              <div class="card-body"><BsFillEyeFill /></div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}

export default App;
