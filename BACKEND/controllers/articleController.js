const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const mongoose = require('mongoose');
const ErrorHandler = require('../utils/errorHandler');
const Articles = require("../models/articleModel");
const dotenv = require("dotenv");
dotenv.config({ path: "config/config.env" });

//Function to check if user is the author of the article
const isAuthor = async (articleID, userID) => {
    const isValid = mongoose.Types.ObjectId.isValid(articleID);
    if (!isValid)
        return next(new ErrorHandler(`${articleID} is not valid !!`, 400));

    const article = await Articles.findById(articleID).populate('author', '-password -verified').exec();
    if (userID.localeCompare(article.author.id) == 0)
        return { _isAuthor: true, article };
    return { _isAuthor: false };
}

//Get all articles
exports.getAllArticles = catchAsyncErrors(async (req, res, next) => {
    const articles = await Articles.find({}, {_id: 1, title: 1, description: 1, tags: 1, author: 1}).populate('author', '-password -verified').lean();
    res.status(200).json(articles);
});

//Get article by id
exports.getArticle = catchAsyncErrors(async (req, res, next) => {
    const isValid = mongoose.Types.ObjectId.isValid(req.params.id);
    if (!isValid)
        return next(new ErrorHandler(`${req.params.id} is not valid !!`, 400));
    const article = await Articles.findById(req.params.id).populate('author', '-password -verified').lean();
    if (!article) {
        return next(new ErrorHandler(`Article with id: ${req.params.id} not found !!`, 404));
    }
    res.status(200).json({ success: true, article });
});

//Create article
exports.createArticle = catchAsyncErrors(async (req, res, next) => {
    const author = mongoose.Types.ObjectId(req.user.id);
    const { title, description, tags, content } = req.body;
    const article = await Articles.create({
        title,
        description,
        tags,
        content,
        author
    });
    res.status(201).json({ success: true, article });
});

//Update article
exports.updateArticle = catchAsyncErrors(async (req, res, next) => {
    const isAuthor = await isAuthor(req.params.id, req.user.id);
    if (!isAuthor._isAuthor)
        return next(new ErrorHandler(`You are not the author of this article !!`, 403));
    await Articles.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    res.status(200).json({ success: true, message: "Article updated successfully" });
});

//Delete article
exports.deleteArticle = catchAsyncErrors(async (req, res, next) => {
    const isAuthor = await isAuthor(req.params.id, req.user.id);
    if (!isAuthor._isAuthor)
        return next(new ErrorHandler(`You are not the author of this article !!`, 403));
    await Articles.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, message: "Article deleted successfully" });
});