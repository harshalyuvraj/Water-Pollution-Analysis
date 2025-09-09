const express = require('express');
const router = express.Router();
const BiologicalData = require('../models/BiologicalData'); // Ensure correct model import

// POST route to save biological parameters
router.post('/', async (req, res) => {
    try {
        const { sampleID, coliform, fecalColiform, algalCount, pathogens } = req.body;
        
        // Create a new document using provided data
        const biologicalData = new BiologicalData({ 
            sampleID, 
            coliform, 
            fecalColiform, 
            algalCount, 
            pathogens, 
             
        });

        await biologicalData.save();
       res.redirect('/fwater'); // Redirect after saving
    } catch (error) {
        console.error("Error saving biological data:", error);
        res.status(500).json({ message: 'Error saving biological data', error });
    }
});

// GET route to retrieve and display biological data
router.get('/', async (req, res) => { // Change '/bdi' to '/'
    try {
        const biologicalData = await BiologicalData.find(); // Fetch data from MongoDB
        res.render('bdi', { biologicalData }); // Pass biologicalData to EJS
    } catch (error) {
        console.error("Error fetching biological data:", error);
        res.status(500).send("Error fetching biological data.");
    }
});

module.exports = router;
