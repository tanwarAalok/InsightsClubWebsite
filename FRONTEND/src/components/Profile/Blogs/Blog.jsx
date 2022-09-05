import React, { useState } from "react";
import "./Blog.css";
import LIKE from "../../../media/likeVector.svg";
import ACTIVELIKE from "../../../media/activeLikeVector.svg";
// import { HiOutlineChat, HiOutlineBookmark } from "react-icons/hi";
import SAVED from "../../../media/SavedVector.svg";
import COMMNENT from "../../../media/commentVector.svg";

function Blog({ blog }) {
	const [liked, setLiked] = useState(false);
	const [count, setCount] = useState(blog.likes);

	const onChange = () => {
		setLiked((prev) => !prev);
		if (liked) {
			setCount(count - 1);
		} else {
			setCount(count + 1);
		}
	};

	return (
		<>
			<div className='profile-blog-container'>
				<div className='profile-blog-header'>
					<p className='profile-blog-header-name'>{blog.author.name}</p>
					<p className='blog-header-time'>{blog.createdAt}</p>
				</div>
				<div className='profile-blog-main'>
					<p className='profile-blog-main-content'>{blog.description}</p>
				</div>
				<div className='profile-blog-footer'>
					<div className='profile-we'>
						<div className='profile-blog-footer-like'>
							<img
								src={liked ? ACTIVELIKE : LIKE}
								alt='like'
								onClick={onChange}
								className='profile-like'
							/>
							<p className='profile-blog-likesCounter'>{count}</p>
						</div>
						<div className='profile-comments'>
							{/* <HiOutlineChat className='chat' /> */}
							<img
								src={COMMNENT}
								alt='saved'
								className='profile-profile-blog-comment'
							/>
							<p className='profile-blog-comment'>{blog.comments}</p>
						</div>
					</div>
					<div>
						<img src={SAVED} alt='profile-saved' />
						{/* <HiOutlineBookmark className='book' color='black' /> */}
					</div>
				</div>
				<div className='profile-blog-delete-edit'>
					<button className='profile-blog-delete'>Delete</button>
					<button className='profile-blog-edit'>Edit</button>
				</div>
			</div>
		</>
	);
}

export default Blog;
