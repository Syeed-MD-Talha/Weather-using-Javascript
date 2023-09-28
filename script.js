const apiKey = '8164085c66c164f8a6c1312119f65c8e';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');


async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);
    try {
        document.querySelector('.weather').style.display = 'block';
        document.querySelector('.error').style.display = 'none';
        document.querySelector('.city').innerText = data.name;
        document.querySelector('.humidity').innerText = `${data.main.humidity}%`;
        document.querySelector('.wind').innerText = `${data.wind.speed} km/h`;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°c";

        var condition = data.weather[0].main.toLowerCase();
        document.querySelector('.weather .weather-icon').src = `images/${condition}.png`;
        console.log(condition);
    }
    catch {
        console.log("........NOT Found........")
        document.querySelector('.weather').style.display = 'none';
        document.querySelector('.error').style.display = 'block';
    }


}
searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);
})


