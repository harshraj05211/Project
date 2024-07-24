const express = require("express");
const router = express.Router();
const userController = require("../controller/users_controller");

router.post("/signup", userController.signup);

router.post("/signin", userController.login);

module.exports = router;