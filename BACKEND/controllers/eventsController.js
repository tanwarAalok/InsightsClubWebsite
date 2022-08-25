const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const Events = require("../models/eventsModel");
const ErrorHandler = require("../utils/errorHandler");
const ApiFeatures = require("../utils/apiFeatures");

//* GET ALL EVENTS
exports.getAllEvents = catchAsyncErrors(async (req, res, next) => {

    const resultPerPage = 4;
    const eventCount = await Events.countDocuments();

    const apiFeatures = new ApiFeatures(Events.find(), req.query).search().filter();
    
    apiFeatures.pagination(resultPerPage);

    let events = await apiFeatures.query;

    if (!events) {
        return next(new ErrorHandler("Events not found!!", 404));
    }

    res.status(200).json({
        success: true,
        events,
        eventCount,
        resultPerPage,
    })
})

//* GET SPECIFIC EVENT DETAILS
exports.getEventDetails = catchAsyncErrors(async (req, res, next) => {

    const eventDetails = await Events.findById(req.params.id);

    if (!eventDetails) {
        return next(new ErrorHandler(`Event details with event id: ${req.params.id} not found !!`), 404);
    }

    res.status(200).json({
        success: true,
        eventDetails
    });
});

