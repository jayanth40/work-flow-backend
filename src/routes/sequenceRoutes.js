// src/routes/sequenceRoutes.js
const express = require('express');
const router = express.Router();
const sequenceController = require('../controllers/sequenceController');

router.get('/sequences', sequenceController.getAllSequences);
router.post('/create-sequence', sequenceController.createSequence);

module.exports = router;
