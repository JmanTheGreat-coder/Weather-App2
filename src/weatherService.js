const API_KEY = '9195141314df48e526b2fbeff8bff2f5';



const getFormattedWeatherData = async (city, units = "metric") => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}=metric`;

  const data = await fetch(URL)
    .then((res) => res.json())
    .then((data) => data);

  console.log(data)

  const {
    weather,
    main: { temp, feels_like, temp_min, temp_max, pressure, humidity},
    wind: { speed },
    sys: { country ,sunset ,sunrise},
    weather: {main},
    visibility,
    timezone,
    clouds,
    dt,
    name,
  } = data;



  const { description, icon} = weather[0];
console.log(weather[0])
  return {
    description,
    dt,
    icon,
    timezone,
    temp,
    feels_like,
    temp_min,
    temp_max,
    pressure,
    humidity,
    speed,
    country,
    visibility,
    clouds,
    main,
    sunrise,
    sunset,
    name,
  };
};


export {getFormattedWeatherData}
