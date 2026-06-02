async function getWeather() {
    const city = document.getElementById("cityInput").value;
    const result = document.getElementById("weatherResult");

    if (city === "") {
        result.innerHTML = "Please enter a city name.";
        return;
    }

    try {
        const response = await fetch(
            `https://wttr.in/${city}?format=j1`
        );

        if (!response.ok) {
            throw new Error("Failed to fetch weather data");
        }

        const data = await response.json();

        const current = data.current_condition[0];

        result.innerHTML = `
            <h3>${city}</h3>
            <p><strong>Temperature:</strong> ${current.temp_C} °C</p>
            <p><strong>Humidity:</strong> ${current.humidity}%</p>
            <p><strong>Wind Speed:</strong> ${current.windspeedKmph} km/h</p>
        `;
    } catch (error) {
        result.innerHTML = `
            <p style="color:red;">
                Error: ${error.message}
            </p>
        `;
    }
}
