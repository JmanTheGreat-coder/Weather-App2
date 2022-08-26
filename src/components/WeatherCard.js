import React from "react";

function WeatherCard({ dt, temp_min, temp_max, main, icon, units,main_temp }) {
  const date = new Date(dt);

  const convertF = (x) => {
    return convertC(x) * 1.8 + 32;
  };

  const convertC = (x) => {
    return x - 273.15;
  };

  return (
    <div>
      <div class="card">
        <div class="card-body text-center">
          <h5 class="card-title">{main}</h5>
          <img
            src={require(`../resources/icon_${icon}.png`)}
            class="icon-photo"
            alt="weatherIcon"
          />
          <h6 class="card-subtitle mb-2 text-muted">
            {date.toLocaleTimeString()}
          </h6>
          <p class="card-text">{date.toLocaleDateString()}</p>
          <a href="#" class="card-link">
            Min:

          </a>
          <h2>
              {units === "metric"
              ? convertF(main_temp).toFixed(0)
              : convertC(main_temp).toFixed(0)}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
