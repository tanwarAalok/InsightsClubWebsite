import React from "react";
import "./Blog.css";
import LIKE from "../../../media/likeVector.svg";

function Blog({ blog }) {
	return (
		<>
			<div className='blog-container'>
				<div className='blog-header'>
					<p className='blog-header-name'>{blog.name}</p>
					<p className='blog-header-time'>{blog.time}</p>
				</div>
				<div className='blog-main'>
					<p className='blog-main-content'>{blog.content}</p>
				</div>
				<div className='blog-footer'>
					<div className='blog-footer-like'>
						<img src={LIKE} alt='like' />
					</div>
					<p className='blog-likesCounter'>{blog.likes}</p>
				</div>
			</div>
		</>
	);
}

export default Blog;
