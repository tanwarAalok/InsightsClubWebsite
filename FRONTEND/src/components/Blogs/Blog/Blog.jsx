import React, { useState } from "react";
import "./Blog.css";
import axios from "axios";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import LIKE from "../../../media/likeVector.svg";
import ACTIVELIKE from "../../../media/activeLikeVector.svg";

function Blog({ blog }) {
	const url = `http://localhost:8080/blog/${blog._id}/like`;
	console.log(url);
	const [liked, setLiked] = useState(false);
	const navigate = useNavigate();
	const handleLikes = () => {
		setLiked((prev) => !prev);
		axios.post(url, 1).then((res) => console.log(res.data));
	};
	return (
		<>
			<div className='blog-container'>
				<div
					className='blog-header'
					onClick={() => navigate(`/blog/${blog._id}`)}>
					<p className='blog-header-name'>{blog.author.name}</p>
					<p className='blog-header-time'>
						{moment(blog.createdAt).format("MMM Do YY")}
					</p>
				</div>
				<div
					className='blog-main'
					onClick={() => navigate(`/blog/${blog._id}`)}>
					<p className='blog-main-content'>{blog.description}</p>
				</div>
				<div className='blog-footer'>
					<div className='blog-footer-like'>
						<img
							src={liked ? ACTIVELIKE : LIKE}
							alt='like'
							onClick={() => handleLikes()}
						/>
					</div>
					<p className='blog-likesCounter'>{blog.likes}</p>
				</div>
			</div>
		</>
	);
}

export default Blog;
