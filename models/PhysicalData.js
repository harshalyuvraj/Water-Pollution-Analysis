// models/PhysicalData.js
const mongoose = require('mongoose');

const physicalDataSchema = new mongoose.Schema({
    sampleID: { type: String, required: true },
    phValue: { type: Number, required: true },
    temperature: { type: Number, required: true },
    turbidity: { type: Number, required: true },
    conductivity: { type: Number, required: true },
    tds: { type: Number, required: true },
    date: { type: Date, default: Date.now }
});

const PhysicalData = mongoose.model('PhysicalData', physicalDataSchema);
module.exports = PhysicalData;
