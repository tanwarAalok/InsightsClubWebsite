const express = require("express");
const router = express.Router();
const { homePage, getAllEvents, createNewEvent } = require("../controllers/eventsController");

router.route("/home").get(homePage);

router.route("/events").get(getAllEvents);
router.route("/event/new").post(createNewEvent);

module.exports = router;