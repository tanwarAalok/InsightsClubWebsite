const catchAsyncErrors = require("../middlewares/catchAsyncErrors");

exports.homePage = catchAsyncErrors(async (req, res, next) => {
    res.send("Let's go");
})