import React from "react";
import "./Blog.css";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import LIKE from "../../../media/likeVector.svg";

function Blog({ blog }) {
	// const url = `${process.env.REACT_APP_BACKEND_URL}/blog/${blog._id}/like`;
	const navigate = useNavigate();
	return (
		<>
			<div
				className='blog-container'
				onClick={() => navigate(`/blog/${blog._id}`)}>
				<div className='blog-header'>
					<p className='blog-header-name'>{blog?.author.name}</p>
					<p className='blog-header-time'>
						{moment(blog.createdAt).format("MMM Do YY")}
					</p>
				</div>
				<div className='blog-main'>
					<p className='blog-main-content'>{blog?.description}</p>
				</div>
				<div className='blog-footer'>
					<div className='blog-footer-like'>
						<img src={LIKE} alt='like' />
					</div>
					<p className='blog-likesCounter'>{0}</p>
				</div>
			</div>
		</>
	);
}

export default Blog;
