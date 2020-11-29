const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');

/* GET list of books. */
router.get('/', storeController.index);

module.exports = router;