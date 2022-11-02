const router = require('express').Router();
const contextualController = require("../controllers/contextual.controller");

router.get("/get_data", contextualController.getInfo);

module.exports = router;