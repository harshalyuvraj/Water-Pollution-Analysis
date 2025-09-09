// models/AirQualityData.js
const mongoose = require('mongoose');

const airQualitySchema = new mongoose.Schema({
    sampleID: { type: String, required: true },
    pm: { type: Number, required: true },
    so2: { type: Number, required: true },
    no2: { type: Number, required: true },
    co: { type: Number, required: true },
    o3: { type: Number, required: true },
    lead: { type: Number, required: true },
    vocs: { type: Number, required: true },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('AirQualityData', airQualitySchema);
