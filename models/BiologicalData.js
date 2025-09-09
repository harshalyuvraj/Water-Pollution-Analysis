const mongoose = require('mongoose');

const biologicalDataSchema = new mongoose.Schema({
    sampleID: { type: String, required: true },
    coliform: { type: Number, required: true },
    fecalColiform: { type: Number, required: true },
    algalCount: { type: Number, required: true },
    pathogens: { type: Number, required: true },
    date: { type: Date, default: Date.now }
});

const BiologicalData = mongoose.model('BiologicalData', biologicalDataSchema);
module.exports = BiologicalData;

