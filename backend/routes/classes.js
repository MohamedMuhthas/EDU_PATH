const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const authorize = require('../middleware/authorize');
const { list, create } = require('../controllers/classController');

router.get('/', list);
router.post('/', auth, authorize('resource_person','admin'), create);

module.exports = router;
