import React, { useEffect, useState } from "react";
import "./View.css";
import Navbar from "../../Navbar/Navbar";
import { useParams } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import LIKE from "../../../media/likeVector.svg";

const View = () => {
	// const blogsUrl = "https://api.insights-club-vitb.ml/blog";
	const params = useParams();
	const [b, setBlog] = useState({});
	const [cookies] = useCookies();
	const url = `${process.env.REACT_APP_BACKEND_URL}/blog`;
	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_BACKEND_URL}/blog/${params.id}`)
			.then((res) => {
				let data = res.data;
				setBlog(data);
			});
	}, [params.id, url]);

	const handleLikes = () => {
		//post user id
		axios
			.post(`${url}/${params.id}/like`, {
				id: params.id,
				user: cookies.user.id,
			})
			.then((res) => console.log(res));
	};

	if (b) {
		return (
			<>
				<Navbar />
				<div className='view-blog-container'>
					<div className='view-blog-header'>
						<p className='view-blog-title'>{b.blog?.title}</p>
					</div>
					<p className='view-blog-authorName'>
						Posted by {b.blog?.author.name} on{" "}
						{new Date(b.blog?.createdAt).toLocaleString()}
					</p>
					<div
						className='view-blog-content'
						dangerouslySetInnerHTML={{ __html: b.blog?.content }}></div>
					<div className='view-blog-footer'>
						<div className='view-blog-footer-like'>
							<img src={LIKE} alt='like' onClick={() => handleLikes()} />
						</div>
						<p className='view-blog-likesCounter'>{b.blog?.likes.length}</p>
					</div>
				</div>
			</>
		);
	} else {
		return <h3>Blog not found</h3>;
	}
};

export default View;
