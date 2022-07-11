function getData() { 

    fetch("https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={API key}")
        .then(response => {
            return response.json()
        })
        .then((data) => {
            console.log(data)
        })
}

(getData)