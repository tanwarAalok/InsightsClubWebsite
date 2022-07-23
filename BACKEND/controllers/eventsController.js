const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const Events = require("../models/eventsModel");
const ErrorHandler = require("../utils/errorHandler");

exports.homePage = catchAsyncErrors(async (req, res, next) => {
    res.send("Let's go");
});


//* GET ALL EVENTS
exports.getAllEvents = catchAsyncErrors(async (req, res, next) => {

    const events = await Events.find();

    if (!events) {
        return next(new ErrorHandler("Events not found!!", 404));
    }

    res.status(200).json({
        success: true,
        events
    })
})

//* CREATE NEW EVENT
exports.createNewEvent = catchAsyncErrors(async (req, res, next) => {
    
    const event = await Events.create(req.body);
    res.status(201).json({
        success: true,
        event
    })
})

//* GET SPECIFIC EVENT DETAILS

