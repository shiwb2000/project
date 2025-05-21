"use client";
import { getWeather } from "./function/script";
import "./style/style.css";
export default function Home() {
  return (
    <div>
      <h1>برنامه نمایش دمای هوا</h1>
      <input
        type='text'
        id='cityInput'
        placeholder='نام شهر خود را وارد کنید'
      />
      <button onClick={() => getWeather()}>نمایش شهر</button>
      <div id='weather'></div>
    </div>
  );
}
