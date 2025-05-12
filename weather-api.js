function getWeather() {
  const apiKey = '85e58e0f04abe35f4b52baf27d1d1318';
  const city = document.getElementById('city').value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      document.getElementById('weatherInfo').innerHTML = `
        <strong>Temperature ${city}:</strong> ${data.main.temp}°C <br>
        <strong>Weather Status :</strong> ${data.weather[0].description}`;
    })
    .catch(error => console.error(' Your Data Entry iS Not True, Pleas Try Again:', error));
}

function clearWeather() {
  //get data
  document.getElementById('weatherInfo').innerHTML = '';
  //remove data
  document.getElementById('city').value = '';
}
