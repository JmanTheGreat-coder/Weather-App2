import React , { useState } from "react";
import WeatherCard from "./WeatherCard";



const WeatherList = ({ weathers , units}) => {



  return             <div class="row">
  <div class="col-lg-12">
    <div class="row row-cols-2 row-cols-md-5 ">
      {weathers?.slice(2,7).map(({dt,main, weather}) => (
         <div key={dt}>
             <WeatherCard main_temp={main.temp} temp_max={main.temp_max} temp_min={main.temp_min} dt={dt * 1000} main={weather[0].main} icon={weather[0].icon} units={units}/>
         </div>
     ))} 
    </div>
  </div>
</div>
};

export default WeatherList;
