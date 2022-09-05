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
          <h5 class="card-title poppin">{main}</h5>
          <img
            src={require(`../svg/icon_${icon}.svg`)}
            class="icon-photo lato"
            alt="weatherIcon"
          />
          <h6 class="card-subtitle mb-2 text-muted lato fs-18">
            {date.toLocaleTimeString()}
          </h6>
          <p class="card-text lato fs-18">{date.toLocaleDateString()}</p>
          <p href="#" class="card-link lato fs-18">
            Min:

          </p>
          <div>
            <h2 class='poppin'>
                {units === "metric"
                ? convertF(main_temp).toFixed(0)
                : convertC(main_temp).toFixed(0)}°{units === "metric" ? "F" : "C"}
            </h2>
          </div>

        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
