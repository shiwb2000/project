async function getWeather() {
    const city = document.getElementById('cityInput').value.trim();
    const apiKey = '6ec330f40130ee16fad4deaa9ff60830'; // API کلید
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fa`;
    const weatherDiv = document.getElementById('weather');

    if (!city) {
        weatherDiv.textContent = 'لطفا نام یک شهر را وارد کنید';
        return;
    }
    try {
        const response = await fetch(url);
        if (!response.ok) {
            weatherDiv.textContent = 'شهر مورد نظر یافت نشد';
            return;
        }
        const data = await response.json();
        const temp = data.main.temp;
        const description = data.weather[0].description;

        weatherDiv.textContent = `دمای شهر ${city} هم اکنون ${temp} درجه سانتی گراد است و وضعیت هوا ${description} است.`;
    } catch (error) {
        weatherDiv.textContent = 'خطا در دریافت اطلاعات';
        console.error(error);
    }
}

