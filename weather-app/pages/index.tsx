import { useState } from 'react';
import { fetchWeather } from '../lib/weather';

export default function Home() {
  const [city, setCity] = useState('');
  const [weatherInfo, setWeatherInfo] = useState('');
  const apiKey = '6ec330f40130ee16fad4deaa9ff60830'; // API کلید

  const handleGetWeather = async () => {
    if (!city.trim()) {
      setWeatherInfo('لطفاً نام شهر را وارد کنید.');
      return;
    }
    try {
      const data = await fetchWeather(city, apiKey);
      setWeatherInfo(`دمای شهر ${city} هم اکنون ${data.temp} درجه سانتی‌گراد است و وضعیت هوا ${data.description} است.`);
    } catch (error) {
      setWeatherInfo('شهر مورد نظر یافت نشد یا خطا رخ داده است.');
    }
  };

  return (
    <div>
      {/* فرم و دکمه */}
      <input
        type="text"
        placeholder="نام شهر"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleGetWeather}>نمایش دما</button>
      {/* نتیجه */}
      <div>{weatherInfo}</div>
    </div>
  );
}