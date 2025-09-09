const express = require('express');
const router = express.Router();
const ChemicalData = require('../models/ChemicalData'); // Ensure this model exists

// POST route to save chemical parameters
router.post('/', async (req, res) => {
    try {
        const { sampleID, do: DO, bod, cod, nh3, no3, no2, phosphate, chlorite, parameter1, parameter2 } = req.body;

        const newChemicalData = new ChemicalData({
            sampleID,
            do: DO,
            bod,
            cod,
            nh3,
            no3,
            no2,
            phosphate,
            chlorite,
            parameter1,
            parameter2
        });

        await newChemicalData.save();
        res.redirect('/fwater'); // Redirect to the home or another page after saving
    } catch (error) {
        console.error("Error saving chemical data:", error);
        res.status(500).send("Error saving chemical data.");
    }
});

// GET route for displaying chemical data
router.get('/', async (req, res) => {
    try {
        const chemicalData = await ChemicalData.find();
        res.render('cdi', { chemicalData }); // Ensure `cdi.ejs` exists
    } catch (error) {
        console.error("Error fetching chemical data:", error);
        res.status(500).send("Error fetching data.");
    }
});

module.exports = router;


