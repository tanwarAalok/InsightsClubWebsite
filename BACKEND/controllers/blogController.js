const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const mongoose = require("mongoose");
const ErrorHandler = require("../utils/errorHandler");
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

const canEdit = async (blogID, userID) => {
	const isValid = mongoose.Types.ObjectId.isValid(blogID);
	if (!isValid) return next(new ErrorHandler(`${blogID} is not valid !!`, 400));

	const blog = await Blogs.findById(blogID)
		.populate("author", "-password -verified")
		.exec();
	if (userID.localeCompare(blog.author.id) == 0)
		return { _canEdit: true, blog };
	return { _canEdit: false };
};

exports.getAllBlogs = catchAsyncErrors(async (req, res, next) => {
	const blogs = await Blogs.find(
		{},
		{ _id: 1, title: 1, description: 1, tags: 1, author: 1 }
	)
		.populate("author", "-password -verified")
		.lean();
	res.status(200).json(blogs);
});

exports.getBlog = catchAsyncErrors(async (req, res, next) => {
	const isValid = mongoose.Types.ObjectId.isValid(req.params.id);
	if (!isValid)
		return next(new ErrorHandler(`${req.params.id} is not valid !!`, 400));
	const blog = await Blogs.findById(req.params.id)
		.populate("author", "-password -verified")
		.lean();
	if (!blog) {
		return next(
			new ErrorHandler(`Blog with id: ${req.params.id} not found !!`, 404)
		);
	}
	res.status(200).json({ success: true, blog });
});

exports.createBlog = catchAsyncErrors(async (req, res, next) => {
	// const author = mongoose.Types.ObjectId(req.user.id);
	const { title, description, tags, content, author } = req.body;
	const blog = await Blogs.create({
		title,
		description,
		tags,
		content,
		author,
	});
	res.status(201).json({ success: true, blog });
});

exports.deleteBlog = catchAsyncErrors(async (req, res, next) => {
	const CanEdit = await canEdit(req.params.id, req.user.id);
	if (!CanEdit._canEdit)
		return next(new ErrorHandler("You cannot edit this blog !!", 400));
	else
		try {
			await Blogs.findByIdAndDelete(CanEdit.blog._id).lean();
			res
				.status(200)
				.json({ success: true, message: "Blog deleted successfully !!" });
		} catch (e) {
			return next(new ErrorHandler(`Some error occured !!`, 500));
		}
});

exports.updateBlog = catchAsyncErrors(async (req, res, next) => {
	const CanEdit = await canEdit(req.params.id, req.user.id);
	if (!CanEdit._canEdit)
		return next(new ErrorHandler("You cannot edit this blog !!", 400));
	else
		try {
			const blog = CanEdit.blog;
			const { title, description, tags, content } = req.body;
			blog.title = title;
			blog.description = description;
			blog.tags = tags;
			blog.content = content;

			await blog.save();
			res.status(200).json({ success: true, blog });
		} catch (e) {
			return next(new ErrorHandler(`Some error occured !!`, 500));
		}
});

//Like / dislike a blog
exports.likeBlog = catchAsyncErrors(async (req, res, next) => {
	const isValid = mongoose.Types.ObjectId.isValid(req.params.id);
	if (!isValid)
		return next(new ErrorHandler(`${req.params.id} is not valid !!`, 400));
	const blog = await Blogs.findById(req.params.id).lean();
	if (!blog) {
		return next(
			new ErrorHandler(`Blog with id: ${req.params.id} not found !!`, 404)
		);
	}
	const user = await User.findById(req.user.id).lean();
	if (!user) {
		return next(
			new ErrorHandler(`User with id: ${req.user.id} not found !!`, 404)
		);
	}
	if (blog.likes.includes(user.id)) {
		blog.likes.splice(blog.likes.indexOf(user.id), 1);
		await blog.save();
		res
			.status(200)
			.json({ success: true, message: "Blog disliked successfully !!" });
	} else {
		blog.likes.push(user.id);
		await blog.save();
		res
			.status(200)
			.json({ success: true, message: "Blog liked successfully !!" });
	}
});
