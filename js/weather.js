function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const API_KEY = "15b4317860ce80b6c07de0960970c7fd";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url).then(response => response.json()).then(data => {
      const weather = document.querySelector("#weather p:first-child")
      const city = document.querySelector("#weather span:last-child")
      const name = data.name;
      const temp = data.main.temp;
      weather.innerText = `${temp}℃`;
      city.innerText = name;
  });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
