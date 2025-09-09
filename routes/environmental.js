const express = require('express');
const router = express.Router();
const EnvironmentalData = require('../models/EnvironmentalData'); // Ensure correct model import

// POST route to save environmental parameters
router.post('/', async (req, res) => {
    try {
        const { sampleID, radiological, noise, soil, waste } = req.body;
        const environmentalData = new EnvironmentalData({ sampleID, radiological, noise, soil, waste });
        await environmentalData.save();
        res.redirect('/fwater'); // Redirect after saving
    } catch (error) {
        console.error("Error saving environmental data:", error);
        res.status(500).json({ message: 'Error saving environmental data', error });
    }
});

// GET route to retrieve and display environmental data
router.get('/', async (req, res) => {  
    try {
        const environmentalData = await EnvironmentalData.find(); // Fetch data from MongoDB
        res.render('odi', { environmentalData }); // Pass environmentalData to EJS
    } catch (error) {
        console.error("Error fetching environmental data:", error);
        res.status(500).send("Error fetching environmental data.");
    }
});

module.exports = router;
