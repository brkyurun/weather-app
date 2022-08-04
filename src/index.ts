const searchBar = document.querySelector(".card-input") as HTMLInputElement;
const locationName = document.querySelector(".location-name");

fetchWeatherAndRender();

searchBar.addEventListener("keydown", (e) => {
  if (e.key !== "Enter") return;
  fetchWeatherAndRender(searchBar.value);
});

function fetchWeatherAndRender(location = "Istanbul", units = "metric") {
  const API_URL = "https://api.openweathermap.org/data/2.5/weather?";
  const API_KEY = "7f7de09e94384bb2128bd49ebdbced3c";
  fetch(`${API_URL}appid=${API_KEY}&q=${location}&units=${units}`)
    .then((res) => res.json())
    .then((res) => updateUI(res))
    .catch((err) => console.log(err));
}

function updateUI(weatherData: any) {
  const locationName = document.querySelector(
    ".location-name"
  ) as HTMLHeadingElement;
  const locationWeather = document.querySelector(
    ".location-weather"
  ) as HTMLHeadingElement;
  const locationDescription = document.querySelector(
    ".location-description"
  ) as HTMLParagraphElement;
  const weatherCurrent = document.querySelector(
    ".weather-current"
  ) as HTMLSpanElement;
  const weatherFeel = document.querySelector(
    ".weather-feel"
  ) as HTMLSpanElement;
  const weatherPressure = document.querySelector(
    ".weather-pressure"
  ) as HTMLSpanElement;
  const weatherHumidity = document.querySelector(
    ".weather-humidity"
  ) as HTMLSpanElement;
  const weatherWindSpeed = document.querySelector(
    ".weather-wind-speed"
  ) as HTMLSpanElement;

  locationName.textContent = weatherData.name;
  locationWeather.textContent = weatherData.weather[0].main;
  locationDescription.textContent = weatherData.weather[0].description;
  weatherCurrent.textContent = `${Number(weatherData.main.temp).toFixed(1)} °C`;
  weatherFeel.textContent = `${Number(weatherData.main.feels_like).toFixed(
    1
  )} °C`;
  weatherPressure.textContent = weatherData.main.pressure;
  weatherHumidity.textContent = `${weatherData.main.humidity}%`;
  weatherWindSpeed.textContent = `${weatherData.wind.speed} km/h`;
}
