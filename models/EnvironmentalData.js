const mongoose = require('mongoose');

const environmentalDataSchema = new mongoose.Schema({
    sampleID: { type: String, required: true },
    radiological: { type: Number, required: true },
    noise: { type: Number, required: true },
    soil: { type: Number, required: true },
    waste: { type: Number, required: true },
    date: { type: Date,  default: Date.now }
});

const EnvironmentalData = mongoose.model('EnvironmentalData', environmentalDataSchema);
module.exports = EnvironmentalData;
