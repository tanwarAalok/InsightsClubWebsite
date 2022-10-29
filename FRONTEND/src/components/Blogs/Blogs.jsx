import React, { Fragment, useEffect, useState } from "react";
import Blog from "./Blog/Blog";
import "./Blogs.css";
import WRITE from "../../media/createBlog.svg";
import { getBlogs } from "../../actions/blogs";
import { useSelector, useDispatch } from "react-redux";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import BlogsSideBar from "./BlogSiderbar/BlogsSideBar";
import AuthModal from "../AuthCards/Auth";

function Blogs() {
	const dispatch = useDispatch();
	const [cookies] = useCookies();
	const navigate = useNavigate();
	const [showAuthModal, displayAuthModal] = useState(false);
	useEffect(() => {
		if (showAuthModal === true)
			document.getElementsByTagName("body")[0].style.overflowY = "hidden";
		else document.getElementsByTagName("body")[0].style.overflowY = "scroll";
	});
	useEffect(() => {
		dispatch(getBlogs());
		console.log(cookies.user);
	}, [dispatch]);
	const Blogs = useSelector((state) => state.blogs);
	const sideBarElement = [
		{ Element: { name: "Home", address: "/" } },
		{ Element: { name: "Event", address: "/events" } },
		{ Element: { name: "Domains", address: "/domains" } },
		{ Element: { name: "About", address: "/about" } },
	];
	return (
		<>
			<div className='blogs-main-container'>
				<div className='blogs-sidebar-container'>
					<BlogsSideBar array={sideBarElement} />
				</div>

				<div className='blogs-container'>
					<div className='blogs-container-header'>
						<div className='blogs-container-sort'>
							<p>
								<a href='#'>Latest</a>
							</p>
							<p>
								<a href='#'>Top</a>
							</p>
							<p>
								<a href='#'>Saved</a>
							</p>
						</div>
						<div className='blogs-container-header-createBlog'>
							<div>
								<p
									onClick={() => {
										if (
											!(
												cookies.hasOwnProperty("user") &&
												Object.keys(cookies.user).length !== 0
											)
										) {
											displayAuthModal(true);
										} else {
											navigate("/write");
										}
									}}>
									{cookies.hasOwnProperty("user") &&
									Object.keys(cookies.user).length !== 0
										? "Write a Blog"
										: "Sign in to Write a blog"}
								</p>
							</div>
							<img src={WRITE} alt='write' />
						</div>
					</div>
					<div className='blogs-container-bloglist'>
						{Blogs?.map((blog, i) => (
							<Fragment key={i}>
								<Blog blog={blog} />
							</Fragment>
						))}
					</div>
				</div>
			</div>
			{showAuthModal && <AuthModal displayModal={displayAuthModal} />}
		</>
	);
}

export default Blogs;
