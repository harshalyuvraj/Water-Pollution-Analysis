const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Parameters page');
});

module.exports = router;  // ✅ Ensure this is exported
