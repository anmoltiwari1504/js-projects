const input_box = document.querySelector(".input-box");
const btn = document.querySelector("#search-button");
const weather = document.querySelector(".weather-image");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");
const humidity = document.querySelector("#humidity");
const wind = document.querySelector("#wind-speed");
const location_not = document.querySelector(".location-notfound");
const weather_body = document.querySelector(".weather-body");
 async function checkweather(city) {
  const api_key = "8963a97d63176030a56824b305f1f288";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
 const weather_data = await fetch(`${url}`).then(response =>

    response.json()
   );
   if (weather_data.cod === `404`) {
     location_not.style.display = "flex"
     weather_body.style.display = "none"
     console.log("error")
     return;
   }
   location_not.style.display = "none";
   weather_body.style.display = "flex";

   console.log(weather_data)
   temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`
   description.innerHTML = `${weather_data.weather[0].description}`
   humidity.innerHTML = `${weather_data.main.humidity}%`
   wind.innerHTML =`${weather_data.wind.speed}`
    switch  (weather_data.weather[0].main) {
      case 'Clouds':
        weather.src = '/assests/cloud.png';
        break;
      case 'Clear':
        weather.src = '/assests/clear.png';
        break;
      case 'mist':
        weather.src = '/assests/mist.png';
        break;
      
      case 'snow':
        weather.src = '/assests/snow.png';
        break;
      
      case 'rain':
        weather.src = '/assests/rain.png';
        break;
    } 
}

btn.addEventListener("click", () => {
  checkweather(input_box.value)
})