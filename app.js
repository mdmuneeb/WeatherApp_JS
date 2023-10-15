const button = document.getElementById("search-button");
function finalresult() {

    const url_1 = "https://api.openweathermap.org/data/2.5/weather?id={city id}&appid=7821014de233ecf098180185706f59ca&units=metric";

    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric"
    const apiKey = "7821014de233ecf098180185706f59ca";

    const inputValue = document.querySelector("#input").value;
    console.log(inputValue);



    async function checkWeather() {
        const response = await fetch(apiUrl+`&q=${inputValue}` + `&appid=${apiKey}`)
        var data = await response.json()

        console.log(data)

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = data.main.temp;
        document.querySelector(".humidity").innerHTML = data.main.humidity;
        document.querySelector(".wind").innerHTML = data.wind.speed;
    }

    checkWeather()
}

button.addEventListener("click",finalresult);

