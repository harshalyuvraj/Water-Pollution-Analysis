
function goBackHome() {
    window.location.href = 'fwater'; //  home page
}

function calculateTreatment() {
    const sampleId = document.getElementById('sampleId').value;
    const contaminant = document.getElementById('contaminant').value;
    const treatment = document.getElementById('treatment').value;
    const cost = document.getElementById('cost').value;
    const removalMethod = document.getElementById('removalMethod').value;

    const resultDiv = document.getElementById('result');

    // Calculate or process the treatment data here
    // For now, just display the entered data
    resultDiv.innerHTML = `
        <h2>Treatment Details</h2>
        <p><strong>Sample ID:</strong> ${sampleId}</p>
        <p><strong>Contaminant:</strong> ${contaminant}</p>
        <p><strong>Treatment Process:</strong> ${treatment}</p>
        <p><strong>Estimated Cost:</strong> $${cost}</p>
        <p><strong>Removal Method:</strong> ${removalMethod}</p>
    `;
}
