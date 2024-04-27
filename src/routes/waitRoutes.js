
const express = require('express');
const router = express.Router();
const waitController = require('../controllers/waitController');

router.get('/wait', waitController.waitFor60Seconds);

module.exports = router;
