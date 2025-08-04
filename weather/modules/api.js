//the api key is generated from openweathermap

const API_KEY = "9795a61f7441bea29ce2cce5edcd0267";

export async function fetchWeather(city) {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    if (!res.ok) throw new Error("city not found");
    return await res.json();
  } catch (error) {
    alert(error.message);
    return null;
  }
}
