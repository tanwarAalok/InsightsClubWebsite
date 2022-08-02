import React, { Fragment, useEffect, useState } from "react";
import Logo from "../../media/logo.png";
import User_Image from "../../media/user_profile.jpeg";
// import { useDispatch, useSelector } from "react-redux";
// import { getEvents } from "../../actions/events";
import "./Navbar.css";
import "@fontsource/mulish";
import { useCookies } from 'react-cookie';
import { Outlet } from "react-router-dom";

function Navbar() {
	const [menu, setMenu] = useState(false);
	const [userCookie] = useCookies(['user']);
	useEffect(() => {
		console.log(userCookie)
	}, [userCookie])
	// const dispatch = useDispatch();
	// useEffect(() => {
	// 	dispatch(getEvents());
	// }, [dispatch]);
	// const events = useSelector((state) => state.events);

	return (
		<Fragment>
			<nav className={menu ? "menu-active" : "navbar"}>
				<a className='nav-logo' href="/">
					<img src={Logo} className='logo' alt='logo' />
				</a>
				<div className='menu-contents'>
					<div className='nav-menu-wrapper'>
						<ul id='primary-menu' className='menu nav-menu'>
							<li className="pp-mobile menu-item">
								<a id='profile-picture' className='profile-picture-mobile' href={Object.keys(userCookie).length !== 0 ? '/profile' : '/signin'}>
									<img src={User_Image} className="profilepic" alt="Profile" />
									<span className="nav__link">
										{Object.keys(userCookie).length !== 0 ? userCookie.username : 'Sign In'}
									</span>
								</a>
							</li>
							<li className='menu-item menu-news'>
								<a className='nav__link' href='/news'>
									News
								</a>
							</li>
							<li className='menu-item menu-about'>
								<a className='nav__link' href='/about'>
									About
								</a>
							</li>
							<li className='menu-item menu-domains'>
								<a className='nav__link' href='/domains'>
									Domains
								</a>
							</li>
							<li className='menu-item menu-events'>
								<a className='nav__link' href='/events'>
									Events
								</a>
							</li>
							<li className='menu-item menu-blogs'>
								<a className='nav__link' href='/blogs'>
									Blogs
								</a>
							</li>
							<li className='menu-item menu-videos'>
								<a className='nav__link' href='/videos'>
									Videos
								</a>
							</li>
						</ul>
					</div>
					<a id='profile-picture' className='profile-picture pp-desktop' href='/profile'>
						<img src={User_Image} className="profilepic" alt="Profile" />
					</a>
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
			<Outlet />
		</Fragment>
	);
}

export default Navbar;
