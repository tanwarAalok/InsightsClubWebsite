const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const Events = require("../models/eventsModel");
const ErrorHandler = require("../utils/errorHandler");
const ApiFeatures = require("../utils/apiFeatures");
const cloudinary = require("cloudinary").v2;
const dotenv = require("dotenv");
dotenv.config({ path: "config/config.env" });
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

exports.homePage = catchAsyncErrors(async (req, res, next) => {
    res.send("Let's go");
});


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

//* CREATE NEW EVENT
exports.createNewEvent = catchAsyncErrors(async (req, res, next) => {
    
    const img = req.files.image;

    if (!img) {
        return next(new ErrorHandler("Image not available", 404));
    }

    const myCloud = await cloudinary.uploader.upload(img.tempFilePath, {
      folder: "Events",
    });

    const { title, description, date, domain, department } = req.body;

    const event = await Events.create({
        title,
        description,
        domain, 
        department,
        date,
        image: {
            public_id: myCloud.public_id,
            url: myCloud.secure_url,
        }
    });
    res.status(201).json({
        success: true,
        event
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

//* DELETE EVENT

exports.deleteEvent = catchAsyncErrors(async (req, res, next) => {
    
    const event = await Events.findById(req.params.id);

    if (!event) {
        return next(new ErrorHandler(`Event details with event id: ${req.params.id} not found !!`), 404);
    }

    // deleting event image from cloudinary
    await cloudinary.uploader.destroy(event.image.public_id);

    await event.remove();

    res.status(200).json({
        success: true,
        message: "Event deleted successfully"
    })
})


//* UPDATE EVENT

exports.updateEvent = catchAsyncErrors(async (req, res, next) => {
    
    let event = await Events.findById(req.params.id);
    
    let newEventData = req.body;
    
    if (!event) {
        return next(new ErrorHandler(`Event details with event id: ${req.params.id} not found !!`), 404);
    }


    if (req.files !== null && req.files.image !== undefined) {

        await cloudinary.uploader.destroy(event.image.public_id);

        const newImage = await cloudinary.uploader.upload(req.files.image.tempFilePath, {
          folder: "Events",
        });


        newEventData.image = {
            public_id: newImage.public_id,
            url: newImage.secure_url
        };
    }
    

    event = await Events.findByIdAndUpdate(req.params.id, newEventData, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    });


    res.status(200).json({
        success: true,
        message: "Event details updated"
    });


});
