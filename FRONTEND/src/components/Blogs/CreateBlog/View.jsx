import React, { useEffect, useState, useContext } from "react";
import { useDispatch } from "react-redux";
import { viewBlogs, deleteBlogs } from "../../../actions/blogs";
import { UserContext } from "../../../App";
import Navbar from "../../Navbar/Navbar";

const View = () => {
	const dispatch = useDispatch();
	const userId = useContext(UserContext);
	const [_id, setId] = useState("");
	const [blog, setBlog] = useState(null);
	const [error, setError] = useState("");
	const [deleting, setDeleting] = useState(false);
	console.log(userId);
	useEffect(() => {
		if (userId !== "") getBlog();
	}, []);

	const getBlog = async () => {
		try {
			dispatch(viewBlogs());
		} catch (error) {
			setError(error.message);
		}
	};

	const deleteBlog = async () => {
		setDeleting(true);

		try {
			dispatch(deleteBlogs());
		} catch (error) {
			setError(error.message);
			setDeleting(false);
		}
	};

	if (blog) {
		return (
			<div className='view-blog-container'>
				<Navbar />
				<div className='view-blog-header'>
					<p className='view-blog-title'>{blog.title}</p>
					<p className='view-blog-authorName'>
						Posted by {blog.author.name} on{" "}
						{new Date(blog.createdAt).toLocaleString()}
					</p>
				</div>
				<div
					className='view-blog-content'
					dangerouslySetInnerHTML={{ __html: blog.content }}></div>
			</div>
		);
	} else {
		return <h3>Blog not found</h3>;
	}
};

export default View;
