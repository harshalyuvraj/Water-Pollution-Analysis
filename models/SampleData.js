const mongoose = require('mongoose');

const sampleDataSchema = new mongoose.Schema({
    sampleID: { type: String, required: true, unique: true },
    physical: Object, // Example: Physical properties of sample
    chemical: Object, // Example: Chemical properties of sample
    airQuality: Object, // Example: Air quality related data
    environmental: Object // Example: Environmental data
    // Add additional fields as needed
});

module.exports = mongoose.model('SampleData', sampleDataSchema);
