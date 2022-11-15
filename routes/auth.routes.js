const router = require('express').Router();
const authController = require('../controllers/auth.controller');

router.post('/verify_device', authController.verifyDevice);

router.post('/google_login', authController.googleLogin);
// router.post('/get_refresh_token', authController.getRefreshToken);
// router.post('/verify_access_token', authController.verifyAccessToken );
// router.post('/verify_refresh_token', authController.verifyRefreshToken );
// router.post('/delete_token', authController.deleteToken);

module.exports = router;