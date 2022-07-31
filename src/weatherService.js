const API_KEY = '9195141314df48e526b2fbeff8bff2f5';
const API_KEY2 = '5879875efdd251785df98e28d0403e4a';





const getFormattedWeatherData = async (city, units = "metric") => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;
  const URL2 = `https://pro.openweathermap.org/data/2.5/forecast/hourly?q=${city}&appid=${API_KEY2}&units=${units}`;
  console.log(URL2);
  const data = await fetch(URL)
    .then((res) => res.json())
    .then((data) => data);

    const data1 = await fetch(URL2)
    .then((res) => res.json())
    .then((data1) => data1);

  const {
    weather,
    main: { temp, feels_like, temp_min, temp_max, pressure, humidity},
    wind: { speed },
    sys: { country ,sunset ,sunrise},
    weather: {main},
    visibility,
    clouds,
    name,
  } = data;
  console.log(data)



  const { description, icon} = weather[0];

  return {
    description,
    icon,
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

export { getFormattedWeatherData };