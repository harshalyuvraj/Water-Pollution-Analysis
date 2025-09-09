async function searchSample() {
    const sampleID = document.getElementById('sampleIDInput').value;

    try {
        const response = await fetch(`/search/${sampleID}`);
        const data = await response.json();

        if (response.ok) {
            displayResults(data);
        } else {
            document.getElementById('resultsContainer').innerHTML = `<p>${data.message}</p>`;
        }
    } catch (error) {
        console.error('Search Error:', error);
        document.getElementById('resultsContainer').innerHTML = `<p>An error occurred while searching.</p>`;
    }
}

function displayResults(data) {
    let resultHTML = `<h3>Results for Sample ID: ${data.sampleID}</h3>`;
    resultHTML += `<p><strong>Physical:</strong> ${JSON.stringify(data.physical)}</p>`;
    resultHTML += `<p><strong>Chemical:</strong> ${JSON.stringify(data.chemical)}</p>`;
    resultHTML += `<p><strong>Air Quality:</strong> ${JSON.stringify(data.airQuality)}</p>`;
    resultHTML += `<p><strong>Environmental:</strong> ${JSON.stringify(data.environmental)}</p>`;

    document.getElementById('resultsContainer').innerHTML = resultHTML;
}