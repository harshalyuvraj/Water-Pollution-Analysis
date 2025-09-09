const SampleData = require('../models/SampleData');

// Search function to retrieve data by sample ID
exports.searchBySampleID = async (req, res) => {
    try {
        const { sampleID } = req.params;

        const sampleData = await SampleData.findOne({ sampleID });
        if (!sampleData) {
            return res.status(404).json({ message: 'No data found for this sample ID' });
        }

        res.status(200).json(sampleData);
    } catch (error) {
        console.error("Search Error:", error);
        res.status(500).json({ message: 'An error occurred while searching' });
    }
};
