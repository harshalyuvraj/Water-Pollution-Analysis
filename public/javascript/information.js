document.addEventListener("DOMContentLoaded", fetchData);

async function fetchData() {
    try {
       
        const data = await response.json();
        displayData(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

function displayData(data) {
    document.getElementById("physical").querySelector(".content").textContent = data.physical || "No data";
    document.getElementById("chemical").querySelector(".content").textContent = data.chemical || "No data";
    document.getElementById("biological").querySelector(".content").textContent = data.biological || "No data";
    document.getElementById("air").querySelector(".content").textContent = data.air || "No data";
    document.getElementById("other").querySelector(".content").textContent = data.other || "No data";
}
