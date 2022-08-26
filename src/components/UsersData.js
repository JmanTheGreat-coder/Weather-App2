import React, { useState, useEffect } from 'react'
import WeatherCard from './WeatherCard';
import WeatherList from './WeatherList'

export default function UsersData({city,units}) {
  const [Users, fetchUsers] = useState([])

  const API_KEY = '9195141314df48e526b2fbeff8bff2f5';

  const getData = () => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=${units}=metric`)
      .then((res) => res.json())
      .then((Users) => {
        console.log(Users)
        fetchUsers(Users)
      })
  }

  useEffect(() => {
    getData(city)
  }, [city])

  console.log(Users.list)
  return (
    <div>  
      <WeatherList weathers={Users.list} units={units}/>    
    </div>
  )
}