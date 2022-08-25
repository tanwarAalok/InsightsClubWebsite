import React, { useState } from "react";
import "./Blog.css";
import LIKE from "../../../media/likeVector.svg";
import ACTIVELIKE from "../../../media/activeLikeVector.svg";

function Blog({ blog }) {
	const [liked, setLiked] = useState(false);

	return (
		<>
			<div className='blog-container'>
				<div className='blog-header'>
					<p className='blog-header-name'>{blog.author.username}</p>
					<p className='blog-header-time'>{blog.author.createdAt}</p>
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
					<p className='blog-likesCounter'>{blog.likes}</p>
				</div>
			</div>
		</>
	);
}

export default Blog;
