let form = document.querySelector("form");
let input = document.querySelector("input");
let cityName = document.querySelector("h2");
let cityTemp = document.querySelector("h4");
let img = document.querySelector("img");
let wind = document.querySelector("h3");

const getWeatherData = async (e) =>{
   e.preventDefault();
   try{
    const response = await fetch (`https://api.weatherapi.com/v1/current.json?key=26cb888a82984ea6af770745230706&q=${input.value}&aqi=yes`);

    const data = await response.json();
    let locationName = data.location.name;
    let temp_c = data.current.temp_c;
    let icon = data.current.condition.icon;
    let windSpeed = data.current.wind_kph;
    cityName.innerText = locationName;
    cityTemp.innerText =`${temp_c}°C`;
    wind.innerText = windSpeed;
    img.setAttribute("src", icon);
   }
    catch {
    window.alert("Enter Valid City Name");
  }
    
    form.reset();
}
form.addEventListener("submit", getWeatherData);