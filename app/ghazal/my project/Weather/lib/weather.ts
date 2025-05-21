export async function fetchWeather(city: string, apiKey: string) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fa`;
  const response = await fetch(url);
  if (!response.ok) throw new Error('City not found');
  const data = await response.json();
  return {
    temp: data.main.temp,
    description: data.weather[0].description
  };
}