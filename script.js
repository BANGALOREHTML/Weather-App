// API KEY
var apiKey = "192233ca5c2f748da450fa07039ba6ca";

// HOOKS
var searchBtn = document.querySelector("#searchBtn");
var searchInput = document.querySelector("#searchInput");
var currentWeather = document.querySelector("#currentWeather");
var forecast = document.querySelector("#forecast");
var history = document.querySelector("#history");

// VAR  - STATE
var searchHistory = JSON.parse(localStorage.getItem("search")) || [];
console.log(searchHistory);

// VAR - CONSTANTS
const apiKey = "192233ca5c2f748da450fa07039ba6ca";
const searchBtn = document.querySelector("#searchBtn");
const searchInput = document.querySelector("#searchInput");
const searchBtn = document.querySelector("#searchBtn");
const searchInput = document.querySelector("#searchInput");
const searchBtn = document.querySelector("#searchBtn");

// EVENT LISTENERS
searchBtn.addEventListener("click", searchWeather);
history.addEventListener("click", searchHistory);
searchWeather. addEventListener("click", searchWeather);

// FUNCTIONS
function searchBtn() {
    if (condition) {
        
        
    } else { 
        
    }

}
function searchInput() {
    if (condition) {
        
    } else {
        
    }

}

function getCurrentWeather() {
    if (let i = 0; i < searchHistory.length; i++) {
        localStorage.getItem("searchHistory");
        
    } else {
        
    }

}
        
    } else {
        
    }

}
       
function getForecast() {
    if (let i = 0; i < searchHistory.length; i++) {
        localStorage.getItem("searchHistory");
        
    } else {
        
    }

}
        
    } else {
        
    }


}

function searchHistory() {
    if (condition) {
        
    } else {

    } 

}
/*GET LAT AND LONG OF CITIES from THE WEATHER DATA on 97*/
function searchWeather() {
    const cityName = searchInput.value;
    const apiURL = "http://api.openweathermap.org/geo/1.0/direct?q="+cityName+"&limit=5&appid="+apiKey;
    fetch(apiURL)
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        console.log (data);
        const lat = data[0].lat;
        const lon = data[0].lon;
        getCurrentWeather(lat, lon);
        getForecast(lat, lon); 
    })
}

// LOCAL STORAGE
localStorage.setItem("search", JSON.stringify(searchHistory));

// CALLS
searchHistory();


