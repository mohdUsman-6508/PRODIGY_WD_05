// https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=e238c6ec8fa1de39971e55be604bf693&units=metric
const input = document.getElementById("input");
const btn = document.getElementById("btn");
const temp = document.querySelector(".temp");
const cityValue = document.querySelector(".city");
const humidity = document.querySelector(".humidity");
const windSpeed = document.querySelector(".wind");
const weatherImage = document.querySelector(".weather-icon");
const weather = document.querySelector(".weather");

async function checkWeather(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e238c6ec8fa1de39971e55be604bf693&units=metric`;
  const response = await fetch(apiUrl);
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();
    cityValue.innerHTML = data.name;
    temp.innerHTML = data.main.temp + "°C";
    humidity.innerText = data.main.humidity + "%";
    windSpeed.innerHTML = data.wind.speed + "km/h";
    console.log(data);
    const weatherCond = data.weather[0].main;
    if (weatherCond === "Mist") {
      weatherImage.src = "/images/mist.png ";
    } else if (weatherCond === "Clouds") {
      weatherImage.src = "/images/clouds.png ";
    } else if (weatherCond === "Rain") {
      weatherImage.src = "/images/rain.png ";
    } else if (weatherCond === "Drizzle") {
      weatherImage.src = "/images/drizzle.png ";
    } else if (weatherCond === "Clear") {
      weatherImage.src = "/images/clear.png ";
    }
    weather.style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

btn.addEventListener("click", () => {
  checkWeather(input.value);
});
