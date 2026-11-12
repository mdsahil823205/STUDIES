let h1 = document.querySelector("h1");
function GetWeather(city) {
  let API_KEY = `df1fa8af9c48cae3aa20b188ab2cb2c9`;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
  )
    .then((raw) => raw.json())
    .then((real) => {
      let celcius = real.main.temp - 273.15;
      h1.innerHTML = `${city}:${+celcius.toFixed(2)}°C`;
      console.log(`${city}:${+celcius.toFixed(2)}°C`);
    })
    .catch((err) => {
      h1.innerHTML = `please enter a correct city`;
      console.log(err.message);
    });
}
GetWeather(prompt("enter a city"));
