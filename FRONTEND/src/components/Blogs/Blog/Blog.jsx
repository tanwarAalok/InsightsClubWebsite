import React, { useState } from "react";
import "./Blog.css";
import { useNavigate } from "react-router-dom";
import LIKE from "../../../media/likeVector.svg";
import ACTIVELIKE from "../../../media/activeLikeVector.svg";

function Blog({ blog }) {
	const [liked, setLiked] = useState(false);
	const blogsUrl = "http://localhost:8080/blog";
	const navigate = useNavigate();

	return (
		<>
			<div
				className='blog-container'
				onClick={() => navigate(`/blog/${blog._id}`)}>
				<div className='blog-header'>
					<p className='blog-header-name'>{blog.author.name}</p>
					<p className='blog-header-time'>{blog.createdAt}</p>
				</div>
				<div className='blog-main'>
					<p className='blog-main-content'>{blog.description}</p>
				</div>
				<div className='blog-footer'>
					<div className='blog-footer-like'>
						<img
							src={liked ? ACTIVELIKE : LIKE}
							alt='like'
							onClick={() => setLiked((prev) => !prev)}
						/>
					</div>
					<p className='blog-likesCounter'>0</p>
				</div>
			</div>
		</>
	);
}

export default Blog;
