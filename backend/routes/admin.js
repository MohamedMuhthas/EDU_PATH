const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const authorize = require('../middleware/authorize');
const { approveResourcePerson } = require('../controllers/adminController');

router.post('/resource-persons/:userId/approve', auth, authorize('admin'), approveResourcePerson);

module.exports = router;
