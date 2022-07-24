const express = require("express");
const router = express.Router();
const { homePage, getAllEvents, createNewEvent } = require("../controllers/eventsController");
const { login, signup, resetPassword, reset, verify } = require("../controllers/authController");

router.route("/home").get(homePage);

router.route("/events").get(getAllEvents);
router.route("/event/new").post(createNewEvent);

router.route("/auth/signin").get(login);
router.route("/auth/signup").post(signup);
router.route("/auth/reset/:id").get(reset);
router.route("/auth/resetPassword").post(resetPassword);
router.route("/auth/verify/:id").get(verify);
module.exports = router;