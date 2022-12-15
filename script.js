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
const searchInput = document.querySelector("#searchInput");
const searchBtn = document.querySelector("#searchBtn");

// EVENT LISTENERS
searchBtn.addEventListener("click", function apiKey() {
    const user = document.querySelector("#searchInput").value;
    function storeClicks() {
        storeQuery()
        history.addEventListener("click", searchHistory);
        searchWeather.addEventListener("click", searchWeather);

        // FUNCTIONS
        function searchBtn() {

            function searchInput() {
            }

            function getCurrentWeather() {
                if (let i = 0; i < searchHistory.length; i++) {
    localStorage.getItem("searchHistory");


    function getForecast() {
        if (let i = 0; i < searchHistory.length; i++) {
            localStorage.getItem("searchHistory");


            function searchHistory() {

                /*GET LAT AND LONG OF CITIES from THE WEATHER DATA on 97*/
                //this is saying  that  we want to  search the weather using the city name we will connect to the open weather  api and the  fetch (a promise) will return the information/
                function searchWeather() {
                    const cityName = searchInput.value;
                    const apiURL = "http://api.openweathermap.org/geo/1.0/direct?q=" + cityName + "&limit=5&appid=" + apiKey;
                    fetch(apiURL)
                        .then(function (response) {
                            return response.json()
                        })
                        .then(function (data) {
                            console.log(data);

                        })
                }

                // LOCAL STORAGE
                localStorage.setItem("search", JSON.stringify(searchHistory));

                // CALLS
                searchHistory();


