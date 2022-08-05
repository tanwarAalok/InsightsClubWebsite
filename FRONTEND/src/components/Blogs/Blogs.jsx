import React, { useState, useEffect } from "react";
import Blog from "./Blog/Blog";
import "./Blogs.css";
import { getBlogs } from "../../actions/blogs";
import { useSelector, useDispatch } from "react-redux";
// import axios from "axios";

const blog = {
	name: "jon wic",
	time: "3d",
	content:
		"aklsjdaslkd jasjddklal sjdlkasjddlkassjddlk asjdlkasjdklas jsdklajsdk askldjaksjddklasjdlk lkassjdklasjadd",
	likes: 10,
};

function Blogs() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getBlogs());
	}, [dispatch]);

	const Blogs = useSelector((state) => state.blogs);
	console.log(Blogs);

	return (
		<>
			<div className='blogs-header'></div>
			<div className='blogs-main-container'>
				<div className='blogs-sidebar'>
					<ul>
						<li>Home</li>
						<li>Home</li>
						<li>Home</li>
						<li>Home</li>
					</ul>
				</div>
				<div className='blogs-container'>
					<Blog blog={blog} />
					<Blog blog={blog} />
					<Blog blog={blog} />
					<Blog blog={blog} />
				</div>
				<div className='blogs-recently-queried'>
					<ul>
						<li>Home</li>
						<li>Home</li>
						<li>Home</li>
						<li>Home</li>
					</ul>
				</div>
			</div>
		</>
	);
}

export default Blogs;
