const express = require("express");
const router = express.Router();
const { homePage } = require("../controllers/index");

router.route("/home").get(homePage);

module.exports = router;