const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const mongoose = require('mongoose');
const ErrorHandler = require('../utils/errorHandler');
const User = require("../models/userModel");
const Blogs = require("../models/blogModel");
const cloudinary = require("cloudinary").v2;
const dotenv = require("dotenv");
dotenv.config({ path: "config/config.env" });
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET,
});


const isAuthor = (blogId, UserId) => {

}


exports.getBlog = catchAsyncErrors(async (req, res, next) => {
    const isValid = mongoose.Types.ObjectId.isValid(req.params.id);
    if (!isValid)
        return next(new ErrorHandler(`${req.params.id} is not valid !!`, 400))
    const blog = await Blogs.findById(req.params.id).populate('author').lean();
    if (!blog) {
        return next(new ErrorHandler(`Blog with id: ${req.params.id} not found !!`, 404));
    }
    res.status(200).json({ success: true, blog });
});



exports.createBlog = catchAsyncErrors(async (req, res, next) => {
    const author = mongoose.Types.ObjectId(req.user.id);
    const { title, description, tags, content } = req.body;
    const blog = await Blogs.create({
        title,
        description,
        tags,
        content,
        author
    });
    res.status(201).json({ success: true, blog });
});



exports.deleteBlog = catchAsyncErrors(async (req, res, next) => {
    try {
        const isValid = mongoose.Types.ObjectId.isValid(req.params.id);
        if (!isValid)
            return next(new ErrorHandler(`${req.params.id} is not valid !!`, 400));
        const deletedBlog = await Blogs.findByIdAndDelete(id);
        if (!deletedBlog)
            return next(new ErrorHandler(`Blog with id: ${req.params.id} not found !!`, 404));
        res.status(200).json({ success: true, message: "Blog deleted successfully !!" });
    } catch (e) {
        return next(new ErrorHandler(`Some error occured !!`, 500));
    }
});



exports.updateBlog = catchAsyncErrors(async (req, res, next) => {
    try {
        const isValid = mongoose.Types.ObjectId.isValid(req.params.id);
        if (!isValid)
            return next(new ErrorHandler(`${req.params.id} is not valid !!`, 400));

        const { title, description, tags, content } = req.body;
        const newBlog = await Blogs.findByIdAndUpdate(req.user.id, { title, description, tags, content }).populate('author').lean();
        res.status(200).json({ success: true, newBlog });
    } catch (e) {
        return next(new ErrorHandler(`Some error occured !!`, 500));
    }
});
