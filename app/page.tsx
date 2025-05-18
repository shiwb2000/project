import React, { useState, useEffect } from "react";

const API_KEY = "YOUR_API_KEY";
const CITY = "Brooklyn,US";

const Weather: React.FC = () => {
  const [weather, setWeather] = useState<any>(null);

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`)
      .then(response => response.json())
      .then(data => setWeather(data))
      .catch(error => console.error("Error fetching weather data:", error));
  }, []);

  return (
    <div style={{ textAlign: "center", fontFamily: "Arial, sans-serif" }}>
      {weather ? (
        <>
          <h2>وضعیت آب‌وهوا در {weather.name}</h2>
          <p>دمای فعلی: {weather.main.temp}°C</p>
          <p>وضعیت: {weather.weather[0].description}</p>
          <p>سرعت باد: {weather.wind.speed} km/h</p>
          <p>رطوبت: {weather.main.humidity}%</p>
        </>
      ) : (
        <p>در حال دریافت اطلاعات...</p>
      )}
    </div>
  );
};

export default Weather;
