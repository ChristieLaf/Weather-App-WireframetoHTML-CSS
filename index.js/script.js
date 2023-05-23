function formatDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let day = days[dayIndex];

  return `${day} ${hours}:${minutes}`;
}

function displayWeatherCondition(response) {
  console.log(response.data);
}

function search(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  let apiKey = "66d6ff1238907f6dafb724d6e10a9b10";
  let apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial';
axios.get(apiUrl).then(displayWeatherCondition);


function convertToCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 10.5;
}

function convertToFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 51;
}

// Feature #1-Week 4
let dateElement = document.querySelector("#date");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);

// Feature # 2-Week 4
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

// Bonus Feature-Week 4
let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", convertToCelsius);

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", convertToFahrenheit);
