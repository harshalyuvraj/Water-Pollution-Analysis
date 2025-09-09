const express = require('express');
const router = express.Router();
const AirQualityData = require('../models/AirQualityData'); // Ensure correct model import

// POST route to save air quality parameters
router.post('/', async (req, res) => {
    try {
        // Extract and validate required fields
        const { sampleID, pm, so2, no2, co, o3, lead, vocs } = req.body;
        
        // Basic validation
        if (!sampleID || !pm || !so2 || !no2 || !co || !o3 || !lead || !vocs) {
            return res.status(400).json({ 
                success: false,
                message: 'All fields are required' 
            });
        }

        // Create new document with parsed numbers
        const airQualityData = new AirQualityData({ 
            sampleID,
            pm: parseFloat(pm),
            so2: parseFloat(so2),
            no2: parseFloat(no2),
            co: parseFloat(co),
            o3: parseFloat(o3),
            lead: parseFloat(lead),
            vocs: parseFloat(vocs)
        });

        // Save to database
        await airQualityData.save();

        // Successful response
        res.status(201).json({
            success: true,
            message: 'Air quality data saved successfully',
            data: airQualityData
        });

    } catch (error) {
        console.error("Error saving air quality data:", error);
        
        // Handle validation errors
        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(val => val.message);
            return res.status(400).json({
                success: false,
                messages
            });
        }

        // Handle duplicate sampleID
        if (error.code === 11000) {
            return res.status(400).json({
                success: false,
                message: 'Sample ID already exists'
            });
        }

        // Handle other errors
        res.status(500).json({ 
            success: false,
            message: 'Server error occurred while saving data'
        });
    }
});

// GET route to retrieve and display air quality data
router.get('/', async (req, res) => { 
    try {
        const airData = await AirQualityData.find(); // Fetch data from MongoDB
        res.render('adi', { airData }); // Pass airData (not airQualityData) to match EJS file
    } catch (error) {
        console.error("Error fetching air quality data:", error);
        res.status(500).send("Error fetching air quality data.");
    }
});

module.exports = router;
