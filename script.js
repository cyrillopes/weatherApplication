let weather = {
  apiKey: "d53b30e762e1e9d395a2c30f3e4cca52",
  fetchWeather: function (city) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}&units=metric`
    )
      .then((res) => res.json())
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    console.log(name, icon, description, temp, humidity, speed);
    document.querySelector(".city").innerText = `Weather in ${name}`;
    document.querySelector(
      ".icon"
    ).src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
    document.querySelector(".temp").innerText = `${temp}°`;
    document.querySelector(".description").innerText = `${description}`;
    document.querySelector(".humidity").innerText = `Humidity: ${humidity}`;
    document.querySelector(".wind").innerText = `Wind speed: ${speed} km/hr`;
    document.querySelector(".weather").classList.remove("loading");
    // document.body.style.backgroundImage = `url('https://source.unsplash.com/1600x900/?${name})`;
  },
  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};
document.querySelector(".search button").addEventListener("click", () => {
  weather.search();
});
document.querySelector(".search-bar").addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    weather.search();
  }
});

weather.fetchWeather("Tokyo");
