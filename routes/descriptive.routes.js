const router = require('express').Router();
const descriptiveController = require('../controllers/descriptiveplay.controller');

router.post('/play/data/:descriptive_id',  descriptiveController.postPlayData);

module.exports = router