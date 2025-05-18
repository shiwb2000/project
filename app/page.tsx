Skip to content
Navigation Menu
shiwb2000
project

Type / to search
Code
Issues
Pull requests
Actions
Projects
Wiki
Security
Insights
Settings
project
/
index.html
in
main

Edit

Preview
Indent mode

Spaces
Indent size

4
Line wrap mode

No wrap
Editing index.html file contents
Selection deleted
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
import React, { useState } from "react";
import "./style.css"; // اگر فایل استایل جداگانه داری

const WeatherApp: React.FC = () => {
  const [city, setCity] = useState<string>("");
  const [weatherData, setWeatherData] = useState<any>(null);

  const apiKey = "85e58e0f04abe35f4b52baf27d1d1318"; 
  const getWeather = async () => {
    if (!city) return;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error("خطا در دریافت اطلاعات:", error);
    }
  };

  const clearWeather = () => {
    setWeatherData(null);
    setCity("");
  };

  return (
    <div className="weather-container">
      <section className="city-name">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="نام شهر..."
        />
        <button onClick={getWeather}>دریافت اطلاعات</button>
        <button onClick={clearWeather}>پاک کردن اطلاعات</button>
      </section>

      {weatherData && (
        <main className="data-entry">
          <h1>{weatherData.main.temp}°C</h1>
          <p className="data-status">{weatherData.weather[0].description}</p>
          <div className="other-data">
            <span>
              سرعت باد: <p className="data-wind">{weatherData.wind.speed}km/h</p>
            </span>
            <span>
              رطوبت: <p className="data-wind">{weatherData.main.humidity}%</p>
            </span>
          </div>
        </main>
      )}
    </div>
  );
};

export default WeatherApp;

Use Control + Shift + m to toggle the tab key moving focus. Alternatively, use esc then tab to move to the next interactive element on the page.
Editing project/index.html at main · shiwb2000/project 
