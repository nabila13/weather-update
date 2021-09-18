let dates = (new Date()).toString().split(' ').splice(1, 3).join(' ');
const slices = dates;
const dateVal = document.getElementById("date");
const h5 = document.createElement("h5");
h5.innerText = slices;
dateVal.appendChild(h5);
const queryCity = document.getElementById("query-city");
const searchBtn = document.getElementById("search-btn");
queryCity.addEventListener("keypress", function(event) {
    if (event.key == "Enter") {
        searchBtn.click();
    }
});

const getData = () => {
    const queryCityName = queryCity.value; ///
    const api = "64703b74f066cf11b7fc46b198f11163";
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${queryCityName}&appid=${api}`)
        .then(res => res.json())
        .then(data => getTheWeather(data));

};
const getTheWeather = (value) => {
    const showDiv = document.getElementById("show");
    showDiv.textContent = "";
    const div = document.createElement("div");
    const temper = ((value.main.temp) - 273).toFixed(0);
    const feels = Math.round((value.main.feels_like) - 273);
    const weather = value.weather[0].main;
    const visibility = parseFloat((value.visibility) / 1000).toFixed(1);
    div.innerHTML = `<h1>City Name: ${value.name} (${value.sys.country})</h1>
    <h3>Temperature: ${temper}<span>&#176;</span>C</h3>
    <h4>Feels Like: ${feels}<span>&#176;</span>C.  <span>${weather}</span></h4>
    <h4>Humidity: ${value.main.humidity}%</h4>
    <h6>visibility: ${visibility}km</h6>


    `;
    showDiv.appendChild(div);
};