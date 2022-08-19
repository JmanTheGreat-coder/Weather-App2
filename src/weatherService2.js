const API_KEY = '9195141314df48e526b2fbeff8bff2f5';



const getFormattedWeatherData2 = async (city, units = "metric") => {
  const URL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=${units}=metric`;

  const data = await fetch(URL)
    .then((res) => res.json())
    .then((data) => data);

console.log(data)



};

export {getFormattedWeatherData2}