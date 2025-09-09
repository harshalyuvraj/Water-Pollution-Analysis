function goBackHome() {
    window.location.href = 'fwater'; // Adjust this URL as necessary
}

function calculateAQI() {
    const pollutant = document.getElementById("pollutant").value;
    const concentration = parseFloat(document.getElementById("concentration").value);
    const result = document.getElementById("result");
    const aqiValueElement = document.getElementById("aqiValue");
    const aqiCategoryElement = document.getElementById("aqiCategory");

    let aqiValue = 0;
    let aqiCategory = "";

    if (pollutant && concentration >= 0) {
        if (pollutant === "pm25") {
            aqiValue = concentration * 4;
            aqiCategory = aqiValue < 50 ? "Good" : "Moderate";
        }
        result.style.display = "block";
        aqiValueElement.textContent = `AQI Value: ${aqiValue.toFixed(1)}`;
        aqiCategoryElement.textContent = `Category: ${aqiCategory}`;
    } else {
        alert("Please select a pollutant and enter a valid concentration.");
    }
}
