import React, { useEffect, useState } from "react";
import LOGO from "../../../media/InsightsLogo.svg";
import "./BlogsNavbar.css";
import { useNavigate } from "react-router-dom";

function BlogsNavbar() {
	const [menu, setMenu] = useState(false);
	const navigate = useNavigate();

	return (
		<>
			<nav className={menu ? "menu-active" : "navbar"}>
				<a className='nav-logo' href='/'>
					<img src={LOGO} className='logo' alt='logo' />
				</a>
				<div className='menu-contents'>
					<div className='nav-menu-wrapper'>
						<ul id='primary-menu' className='menu nav-menu'>
							<li className='menu-item menu-about'>
								<a className='nav-link' href='/about'>
									About
								</a>
							</li>
							<li className='menu-item menu-news'>
								<a className='nav-link' href='/articles'>
									News
								</a>
							</li>
							<li className='menu-item menu-events'>
								<a className='nav-link' href='/events'>
									Events
								</a>
							</li>
							<li className='menu-item menu-blogs'>
								<a className='nav-link' href='/blogs'>
									Blogs
								</a>
							</li>
							<li className='menu-item menu-videos'>
								<a className='nav-link' href='/videos'>
									{menu ? "Bookmarked" : "Videos"}
								</a>
							</li>
						</ul>
					</div>
					<button
						id='menu-toggler'
						className='hamburger'
						onClick={() =>
							setMenu((prev) => (prev ? (prev = false) : (prev = true)))
						}>
						<span className='hamburger-line hamburger-line-top'></span>
						<span className='hamburger-line hamburger-line-middle'></span>
						<span className='hamburger-line hamburger-line-bottom'></span>
					</button>
				</div>
			</nav>
		</>
	);
	// const navigate = useNavigate();
	// return (
	// 	<>
	// 		<div className='blogsnavbar-nav'>
	// 			<div className='blogsnavbar-logo'>
	// 				<img src={LOGO} alt='logo' onClick={() => navigate("/")} />
	// 			</div>
	// 			<div className='blogsnavbar-search_box'>
	// 				<input type='search' placeholder='Search by title or name...' />
	// 			</div>
	// 			<div className='blogsnavbar-hambugermenu'>
	// 				<img src={MENU} alt='menu' />
	// 			</div>
	// 		</div>
	// 	</>
	// );
}

export default BlogsNavbar;
