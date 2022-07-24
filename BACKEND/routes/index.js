const express = require("express");
const router = express.Router();
const { login, signup, resetPassword, reset, verify } = require("../controllers/authController");
const { homePage, getAllEvents, createNewEvent, getEventDetails, deleteEvent, updateEvent } = require("../controllers/eventsController");

router.route("/home").get(homePage);

router.route("/events").get(getAllEvents);
router.route("/event/new").post(createNewEvent);
router.route("/event/:id").get(getEventDetails).delete(deleteEvent).put(updateEvent);

router.route("/auth/signin").get(login);
router.route("/auth/signup").post(signup);
router.route("/auth/reset/:id").get(reset);
router.route("/auth/resetPassword").post(resetPassword);
router.route("/auth/verify/:id").get(verify);


module.exports = router;