import { fetchWeather } from "./modules/api.js";
import { renderWeather, renderRecentCities } from "./modules/ui.js";
import { saveCity, getRecentCities } from "./modules/storage.js";

const form = document.getElementById("weatherForm");
const cityInput = document.getElementById("cityInput");
const weatherResult = document.getElementById("weatherResult");
const recentCities = document.getElementById("recentCities");

renderRecentCities(getRecentCities(), handleCityClick);

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const city = cityInput.value.trim();
  if (!city) retutn;

  const data = await fetchWeather(city);

  if (data) {
    renderWeather(data);
    saveCity(city);
    renderRecentCities(getRecentCities(), handleCityClick);
  }
  cityInput.value = "";
});

function handleCityClick(city) {
  cityInput.value = city;
  form.dispatchEvent(new Event("submit"));
}
