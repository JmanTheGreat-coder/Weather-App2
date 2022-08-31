import React, { useState } from "react";
import WeatherCard from "./WeatherCard";

const WeatherList = ({ weathers, units }) => {
  return (
    <div class="container-fluid">
      <h1>Today's Highlights</h1>
      <div class="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2">
        {weathers?.slice(2, 9).map(({ dt, main, weather }) => (
          <div key={dt} class="col-lg-2 col-md-3 col-sm-4 col-6 ">
            <WeatherCard
              main_temp={main.temp}
              temp_max={main.temp_max}
              temp_min={main.temp_min}
              dt={dt * 1000}
              main={weather[0].main}
              icon={weather[0].icon}
              units={units}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherList;
