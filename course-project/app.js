searchButton.addEventListener("click", searchWeather);

function searchWeather() {
  var cityName = searchCity.value;
  if (cityName.trim().length == 0) {
    return alert("Please enter a City Name");
  }
  var http = new XMLHttpRequest();
  var apikey = "57cc39de5344c2371abfb9ec4ec2d56e";
  var url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apikey}`;

  http.open("GET", url);
  http.onreadystatechange = function () {
    if (http.readyState == XMLHttpRequest.DONE && http.status === 200) {
      var data = JSON.parse(http.responseText);
      var weatherData = new Weather(
        cityName,
        data.weather[0].description.toUpperCase()
      );
      weatherData.temperature = data.main.temp;
      console.log(weatherData);
    } else if (http.readyState === XMLHttpRequest.DONE) {
      alert("Something went wrong.");
    }
  };
  http.send();
}
