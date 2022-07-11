let todayMoment = moment();

let cityDate = $("#date")
cityDate.text(todayMoment.format("MM/DD/YY"));






function getWeatherApi() {

    let city = "lat, lon";
    let currentTemp = "";
    let forecastTemp = "";

// fetching: city, current temperature, wind speed, humidity, and UV Index
// fetching forecast: daily temp, daily wind speed, and daily humidity
    let requestUrl = "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&current.temp&current.wind_speed&hourly.humidity&hourly.uv&daily.temp&daily.wind_speed&daily.humidity&appid={2be22b86b9aea046815ddb323663aa59}"

    fetch(requestUrl)
    .then(function(response) {
        return response.json();
    })

    .then(function(data) {
        const weatherData = data.results;
        console.log(weatherData);
    })
}

