import React, { useEffect, useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { viewBlogs } from "../../../actions/blogs";
import Navbar from "../../Navbar/Navbar";
import { useParams } from "react-router-dom";

const View = () => {
	const params = useParams();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(viewBlogs(params.id));
	}, [dispatch, params.id]);
	const b = useSelector((state) => state.blogs);
	console.log(b);
	const blog = {
		success: true,
		blog: {
			_id: "630a69274fc25b1c50610c1f",
			title: "How to console log thing in JavaScript",
			description: "Console logging thing in JavaScript",
			tags: ["javascript", "webdev"],
			content:
				'<pre>console.log("Hello World")</pre>\n<h1><strong>This is how you console log things in javascript</strong></h1>\n',
			author: {
				_id: "62df534bba9be4ea9bae99dd",
				username: "admin",
				name: "Deekay",
				isAdmin: true,
				isCoAdmin: true,
				createdAt: "2022-07-26T02:36:59.098Z",
				updatedAt: "2022-07-26T02:36:59.098Z",
				__v: 0,
				department: "63076967961e27e98752a4f1",
			},
			likes: [],
			isReviewed: true,
			createdAt: "2022-08-27T18:57:43.482Z",
			updatedAt: "2022-08-28T06:07:25.617Z",
			__v: 0,
			ReviewedBy: "62dd21b15ccff1c1e20d6745",
			reviewedBy: "62dd21b15ccff1c1e20d6745",
		},
	};
	// const dispatch = useDispatch();
	// const [_id, setId] = useState("");
	// const [blog, setBlog] = useState(null);
	// const [error, setError] = useState("");
	// const [deleting, setDeleting] = useState(false);
	// console.log(userId);
	// useEffect(() => {
	// 	if (userId !== "") getBlog();
	// }, []);

	// const getBlog = async () => {
	// 	try {
	// 		dispatch(viewBlogs());
	// 	} catch (error) {
	// 		setError(error.message);
	// 	}
	// };

	// const deleteBlog = async () => {
	// 	setDeleting(true);

	// 	try {
	// 		dispatch(deleteBlogs());
	// 	} catch (error) {
	// 		setError(error.message);
	// 		setDeleting(false);
	// 	}
	// };
	// return (
	// 	<div>
	// 		{/* <Navbar /> */}
	// 		<div dangerouslySetInnerHTML={{ __html: blog.content }}></div>
	// 	</div>
	// );
	// if (blog) {
	return (
		<div className='view-blog-container'>
			<Navbar />
			<div className='view-blog-header'>
				<p className='view-blog-title'>{blog.blog.title}</p>
				<p className='view-blog-authorName'>
					Posted by {blog.blog.author.name} on{" "}
					{new Date(blog.blog.createdAt).toLocaleString()}
				</p>
			</div>
			<div
				className='view-blog-content'
				dangerouslySetInnerHTML={{ __html: blog.blog.content }}></div>
		</div>
	);
	// } else {
	// 	return <h3>Blog not found</h3>;
	// }
};

export default View;
