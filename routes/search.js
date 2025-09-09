const express = require('express');
const router = express.Router();
const searchController = require('../controllers/searchController');

router.get('/search/:sampleID', searchController.searchBySampleID);

module.exports = router;
