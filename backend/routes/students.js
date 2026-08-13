const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { getProfile, createOrUpdate } = require('../controllers/studentController');

router.get('/profile', auth, getProfile);
router.put('/profile', auth, createOrUpdate);

module.exports = router;
