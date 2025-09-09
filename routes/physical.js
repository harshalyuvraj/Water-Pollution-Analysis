const express = require('express');
const router = express.Router();
const PhysicalData = require('../models/PhysicalData'); // Ensure correct model import

// POST route to save physical parameters
router.post('/', async (req, res) => {
    try {
        const { sampleID, phValue, temperature, turbidity, conductivity, tds } = req.body;
        const physicalData = new PhysicalData({ sampleID, phValue, temperature, turbidity, conductivity, tds });
        await physicalData.save();
        res.redirect('/fwater'); // Redirect after saving
    } catch (error) {
        console.error("Error saving physical data:", error);
        res.status(500).json({ message: 'Error saving physical data', error });
    }
});

// GET route to retrieve and display physical data
router.get('/', async (req, res) => {  // Change '/pdi' to '/'
    try {
        const physicalData = await PhysicalData.find(); // Fetch data from MongoDB
        res.render('pdi', { physicalData }); // Pass physicalData to EJS
    } catch (error) {
        console.error("Error fetching physical data:", error);
        res.status(500).send("Error fetching physical data.");
    }
});

module.exports = router;
