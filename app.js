const apiKey = "c1af9ca2c9867784b3ce2dbf268a3e0d"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")


async function checkWeather(city){
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
  
  

  if(response.status == 404){
    document.querySelector(".error").style.display = "block"
    document.querySelector(".weather").style.display = "none"
  }else {



    let data = await response.json()

    console.log(data)

    document.querySelector(".city").innerHTML = data.name
    document.querySelector(".temp").innerHTML = `${(data.main.temp).toFixed(0)}°c `
    document.querySelector(".humidity").innerHTML = `${data.main.humidity} %`
    document.querySelector(".wind").innerHTML = `${data.wind.speed} km/h`
    document.querySelector(".feels").innerHTML =  ` Feels ${(data.main.feels_like).toFixed(0)}°c`

    if(data.weather[0].main == "Clouds"){
      weatherIcon.src = "images/clouds.png"
    }
    else if(data.weather[0].main == "Rain"){
      weatherIcon.src = "images/rain.png"
    }
    else if(data.weather[0].main == "Drizzle"){
      weatherIcon.src = "images/drizzle.png"
    }
    else if(data.weather[0].main == "Mist"){
      weatherIcon.src = "images/mist.png"
    }
  
  
  document.querySelector(".weather").style.display ="block "
  document.querySelector(".error").style.display = "none"
  }
  
  }

// searchBtn.addEventListener("click",()=>{
//   checkWeather(searchBox.value)
// })

function clickEvents() {
  checkWeather(searchBox.value);
}

searchBtn.addEventListener("click", clickEvents);


searchBox.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    clickEvents();
  }
});