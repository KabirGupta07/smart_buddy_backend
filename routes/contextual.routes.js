const router = require('express').Router();
const contextualController = require("../controllers/contextual.controller");
const contextualPlayController = require('../controllers/contextualplay.controller');
// ENDPOINT = /contextual

// DEVICE ENDPOINTS
router.route("/data")
    .get(contextualController.getData);
    // .post(contextualController.postData);
router.get('/play/data', contextualPlayController.getData);

router.post('/play/data/:contextual_id', contextualPlayController.postPlayData);

// router.post("/add_video/:retail_id", contextualController.addVideo);

router.post("/upload_video/verify", contextualController.handleVerifyUpload);

router.post("/upload_video/merge", contextualController.handleMerge);

router.post("/upload_video/delete", contextualController.deleteFiles);

router.post("/upload_video/data", contextualController.handleFormData);

// router.post("/update_video/:retail_id",);
// router.post("/data/:retail_id",);
// router.get("/stats",);
// router.delete("/delete",);

module.exports = router;