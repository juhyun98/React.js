import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Ex01 = () => {

  const [weather, setWeather] = useState(null)

    // 현재 위치(위, 경도)를 가져오는 함수
    const getCurrentLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            // console.log(position);

            let lat = position.coords.latitude;
            let lon = position.coords.longitude;

            getCurrentWeather(lat, lon);
        })
    }

    // 현재 위치의 날씨 정보를 가져오는 함수
    const getCurrentWeather = async (lat, lon) => {
      const API_KEY = 'c807d8ae670d9f65a1785ec47bfd6c9d';
      let weather_url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

      let response = await axios.get(weather_url);

      console.log(response.data);
      setWeather(response.data);

    }

    useEffect(() => {

        // 위치정보 받아오기
        getCurrentLocation();
    }, []);

  return (
    <div>
        <h1>2024.02.14</h1>
        <div>
            <img src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`}/>
        </div>
        <div>
            {/* 현재 {weather && weather.name}은 {weather && weather.main.temp}℃ 입니다. */}
            현재 {weather?.name}은 {weather?.main.temp}℃ 입니다.
        </div>
    </div>
  )
}

export default Ex01