const router = require('express').Router();
const descriptivePlayController = require('../controllers/descriptiveplay.controller');
const descriptiveController = require('../controllers/descriptive.controller');

router.post('/play/data/:descriptive_id',  descriptivePlayController.postPlayData);
router.post('/data', descriptiveController.postData);

module.exports = router