const router = require('express').Router();
const contextualController = require("../controllers/contextual.controller");

// ENDPOINT = /contextual

// DEVICE ENDPOINTS
router.route("/data")
.get(contextualController.getData)
.post(contextualController.postData);
// router.post("add_video/:retail_id", );
// router.post("/update_video/:retail_id",);
// router.get("/data/:retail_id",);
// router.post("/data/:retail_id",);
// router.get("/stats",);
// router.delete("/delete",);

module.exports = router;