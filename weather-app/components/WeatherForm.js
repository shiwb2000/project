// pages/index.js
import { useState } from 'react';
import styles from '../styles/Weather.module.css';

export default function Home() {
  const [weatherInfo, setWeatherInfo] = useState('');
  const [city, setCity] = useState('');

  const getWeather = async () => {
    if (!city.trim()) {
      setWeatherInfo('لطفا نام یک شهر را وارد کنید');
      return;
    }
    const apiKey = '6ec330f40130ee16fad4deaa9ff60830';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fa`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        setWeatherInfo('شهر مورد نظر یافت نشد');
        return;
      }
      const data = await response.json();
      const temp = data.main.temp;
      const description = data.weather[0].description;

      setWeatherInfo(`دمای شهر ${city} هم اکنون ${temp} درجه سانتی‌گراد است و وضعیت هوا ${description} است.`);
    } catch (error) {
      setWeatherInfo('خطا در دریافت اطلاعات');
      console.error(error);
    }
  };

  return (
    <div className={styles.container}>
      <h1>برنامه نمایش دمای هوا</h1>
      <input
        type="text"
        placeholder="نام شهر خود را وارد کنید"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className={styles.input}
        id="cityInput"
      />
      <button onClick={getWeather} className={styles.button}>نمایش دما</button>
      <div id="weather" className={styles.weather}>
        {weatherInfo}
      </div>
    </div>
  );
}