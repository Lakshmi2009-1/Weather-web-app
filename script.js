const apiKey = "43c05378f6edbf7ec1e2626e2182047b";

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector('.search input');

const searchBtn = document.querySelector('.search button');

const weatherIcon = document.querySelector('.weather-icon');

async function checkWeather(city) {

  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  
  if (response.status == 404) {
    document.querySelector('.error').style.display = 'block';
    document.querySelector('.weather').style.display = 'none';
    document.querySelector('.details').style.display = 'none';
    document.querySelector('.welcome').style.display = 'none'; 
  }
  else {
  
  let data = await response.json();
  
  console.log(data);
  
  document.querySelector('.temp').innerHTML = data.main.temp + '°c';
  document.querySelector('.city').innerHTML = data.name;
  document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
  document.querySelector('.wind').innerHTML = data.wind.speed + ' km/h';
  
  if (data.weather[0].main == 'Clear') {
  weatherIcon.src = './clear.png';
  }
  else if (data.weather[0].main == 'Clouds') {
  weatherIcon.src = './cloud.png';
  }
  else if (data.weather[0].main == 'Rain') {
  weatherIcon.src = './rain.png';
  }
  else if (data.weather[0].main == 'Drizzle') {
  weatherIcon.src = './drizzle.png';
  } 
  else if (data.weather[0].main == 'Mist') {
  weatherIcon.src = './mist.png';
  }
  else if (data.weather[0].main == 'Snow') {
  weatherIcon.src = './snow.png';
 }
 else if (data.weather[0].main == 'Ash') {
  weatherIcon.src = './ash.png';
 }
 else if (data.weather[0].main == 'Dust') {
  weatherIcon.src = './dust-sand.png';
 }
 else if (data.weather[0].main == 'Sand') {
  weatherIcon.src = './dust-sand.png';
 }
 else if (data.weather[0].main == 'Haze') {
  weatherIcon.src = './haze.png';
 }
 else if (data.weather[0].main == 'Smoke') {
  weatherIcon.src = './smoke.png';
 }
 else if (data.weather[0].main == 'Squall') {
  weatherIcon.src = './squall.png';
 }
 else if (data.weather[0].main == 'Thunderstorm') {
  weatherIcon.src = './thunderstorm.png';
 }
 else if (data.weather[0].main == 'Tornado') {
  weatherIcon.src = './tornado.png';
 }
 else if (data.weather[0].main == 'Fog') {
  weatherIcon.src = './fog.png';
 }
  
 document.querySelector('.error').style.display = 'none';
    document.querySelector('.weather').style.display = 'block';
    document.querySelector('.details').style.display = 'flex'; 
    document.querySelector('.welcome').style.display = 'none'; 
    
  
}

}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
