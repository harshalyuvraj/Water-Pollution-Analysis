document.querySelector('.search-input').addEventListener('keydown', async (e) => {
    if (e.key === 'Enter') {
        const sampleID = e.target.value;
        const response = await fetch(`/search?sampleID=${sampleID}`);
        const data = await response.json();

        if (data) {
            const resultContainer = document.getElementById('result-container');
            resultContainer.innerHTML = `
                <h3>Results for Sample ID: ${sampleID}</h3>
                <p><strong>Physical Data:</strong> ${JSON.stringify(data.physicalData)}</p>
                <p><strong>Chemical Data:</strong> ${JSON.stringify(data.chemicalData)}</p>
                <p><strong>Air Quality Data:</strong> ${JSON.stringify(data.airQualityData)}</p>
                <p><strong>Environmental Data:</strong> ${JSON.stringify(data.environmentalData)}</p>
               <p><strong>Biological Data:</strong> ${JSON.stringify(data.biologicalData)}</p>

                `;
        } else {
            alert('No data found for the provided Sample ID.');
        }
    }
});
