const KEY = "recentCities";

export function getRecentCities() {
  return JSON.parse(localStorage.getItem(KEY)) || [];
}

export function saveCity(city) {
  let cities = getRecentCities();
  cities = [city, ...cities.filter((c) => c !== city)].slice(0, 5);
  localStorage.setItem(KEY, JSON.stringify(cities));
}
