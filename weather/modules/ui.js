const weatherResult = document.getElementById("weatherResult");
const recentCities = document.getElementById("recentCities");

export function renderWeather(data) {
  const { name, main, weather } = data;
  weatherResult.innerHTML = `
    <h2>${name}</h2>
    <p><strong>Temperature:</strong> ${main.temp}°C</p>
    <p><strong>Humidity:</strong> ${main.humidity}%</p>
    <p><strong>Condition:</strong> ${weather[0].main}</p>
    <img src="http://openweathermap.org/img/wn/${weather[0].icon}@2x.png" alt="${weather[0].description}" />
  `;
}

export function renderRecentCities(cities, onClick) {
  recentCities.innerHTML = "<h3>Recent:</h3>";
  cities.forEach((city) => {
    const btn = document.createElement("span");
    btn.textContent = city;
    btn.className = "recent-city";
    btn.onclick = () => onClick(city);
    recentCities.appendChild(btn);
  });
}
