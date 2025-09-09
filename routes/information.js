const express = require('express');
const router = express.Router();
const PhysicalData = require('../models/PhysicalData');
const ChemicalData = require('../models/ChemicalData');
const BiologicalData = require('../models/BiologicalData');
const AirQualityData = require('../models/AirQualityData');
const EnvironmentalData = require('../models/EnvironmentalData');

router.get('/data', async (req, res) => {
    try {
        const physical = await PhysicalData.find().distinct('someField');
        const chemical = await ChemicalData.find().distinct('someField');
        const biological = await BiologicalData.find().distinct('someField');
        const air = await AirQualityData.find().distinct('someField');
        const other = await EnvironmentalData.find().distinct('someField');

        res.json({ physical, chemical, biological, air, other });
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ error: "Failed to fetch data" });
    }
});

module.exports = router;
