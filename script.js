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
    if (condition) {
        
    } else {
        
    }

}
       
function getForecast() {
    if (condition) {
        
    } else {
        
    }


}

function searchHistory() {
    if (condition) {
        
    } else {

    } 

}
    
// LOCAL STORAGE
localStorage.setItem("search", JSON.stringify(searchHistory));

// CALLS
searchHistory();

