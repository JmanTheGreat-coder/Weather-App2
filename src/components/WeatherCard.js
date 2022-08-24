import React from "react";

function WeatherCard({ dt, temp_min, temp_max, main, icon }) {
  const date = new Date(dt);
  return (
    <div>
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">{main}</h5>
          <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
          <h6 class="card-subtitle mb-2 text-muted">
            Card subtitle{date.toLocaleTimeString()}
          </h6>
          <p class="card-text">{date.toLocaleDateString()}</p>
          <a href="#" class="card-link">
            Min: {temp_min}
          </a>
          <a href="#" class="card-link">
            Max: {temp_max}
          </a>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
