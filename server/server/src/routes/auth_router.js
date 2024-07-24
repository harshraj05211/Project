const express = require("express");
const router = express.Router();
const authController = require("../controller/auth_controller");

router.post("/", authController.getMe);


module.exports = router;