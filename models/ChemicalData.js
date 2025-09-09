// models/ChemicalData.js
const mongoose = require('mongoose');

const chemicalDataSchema = new mongoose.Schema({
    sampleID: { type: String, required: true },
    do: { type: Number, required: true },
    bod: { type: Number, required: true },
    cod: { type: Number, required: true },
    nh3: { type: Number, required: true },
    no3: { type: Number, required: true },
    no2: { type: Number, required: true },
    phosphate: { type: Number, required: true },
    chlorite: { type: Number, required: true },
    date: { type: Date, default: Date.now }  // Optional: To keep track of the entry date
});

module.exports = mongoose.model('ChemicalData', chemicalDataSchema);
