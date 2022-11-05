const router = require('express').Router();
const contextualController = require("../controllers/contextual.controller");
const contextualPlayController = require('../controllers/contextualplay.controller');
// ENDPOINT = /contextual

// DEVICE ENDPOINTS
router.route("/data")
    .get(contextualController.getData)
    .post(contextualController.postData);

router.route('/play/data/:contextual_id')
    .post(contextualPlayController.postPlayData);
// router.post("add_video/:retail_id", );
// router.post("/update_video/:retail_id",);


// router.post("/data/:retail_id",);
// router.get("/stats",);
// router.delete("/delete",);


module.exports = router;