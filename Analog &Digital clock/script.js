function updateClock() {
  const now = new Date();

  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");

  const seconds = String(now.getSeconds()).padStart(2, "0");

  document.getElementById(
    "digitalClock"
  ).textContent = `${hours}:${minutes}:${seconds}`;

  const options = {
    weekDay: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  document.getElementById("digitalDate").textContent = now.toLocaleDateString(
    "en-us",
    options
  );

  const secondDeg = (now.getSeconds() / 60) * 360;
  const minuteDeg = ((now.getMinutes() + now.getSeconds() / 60) / 60) * 360;
  const hourDeg = ((now.getHours() % now.getMinutes()) / 60 / 12) * 360;
  document.getElementById(
    "secondHand"
  ).style.transform = `translateX(-50%) rotate(${secondDeg}deg)`;
  document.getElementById(
    "minuteHand"
  ).style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;
  document.getElementById(
    "hourHand"
  ).style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
}
setInterval(updateClock, 1000);
updateClock();
