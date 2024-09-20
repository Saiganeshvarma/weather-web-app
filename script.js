const weatherData = {
    "New York": {
        temp: 25,
        description: "Sunny",
        humidity: 50,
        windSpeed: 10,
        background: "images/sunny.jpg" // Path to sunny image
    },
    "London": {
        temp: 18,
        description: "Cloudy",
        humidity: 65,
        windSpeed: 15,
        background: "images/cloudy.jpg" // Path to cloudy image
    },
    "Tokyo": {
        temp: 30,
        description: "Clear",
        humidity: 40,
        windSpeed: 8,
        background: "images/clear-sky.jpg" // Path to clear sky image
    },
    "Sydney": {
        temp: 22,
        description: "Rainy",
        humidity: 70,
        windSpeed: 12,
        background: "images/rain.jpg" // Path to rainy image
    }
};

const getWeatherBtn = document.getElementById('get-weather');
const citySelect = document.getElementById('city');
const cityName = document.getElementById('city-name');
const temperature = document.getElementById('temperature');
const weatherDescription = document.getElementById('weather-description');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('wind-speed');
const weatherInfo = document.getElementById('weather-info');
const errorMessage = document.getElementById('error-message');

getWeatherBtn.addEventListener('click', () => {
    const selectedCity = citySelect.value;
    
    if (selectedCity === "") {
        showError("Please select a city.");
        return;
    }

    displayWeatherData(selectedCity);
});

function displayWeatherData(city) {
    const data = weatherData[city];

    cityName.textContent = city;
    temperature.textContent = `Temperature: ${data.temp}°C`;
    weatherDescription.textContent = `Description: ${data.description}`;
    humidity.textContent = `Humidity: ${data.humidity}%`;
    windSpeed.textContent = `Wind Speed: ${data.windSpeed} km/h`;

    weatherInfo.style.display = 'block';
    errorMessage.style.display = 'none';

    // Update background image
    document.body.style.backgroundImage = `url(${data.background})`;
    document.body.style.backgroundSize = 'cover'; // Ensure the background covers the entire screen
}

function showError(message) {
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
    weatherInfo.style.display = 'none';
}
