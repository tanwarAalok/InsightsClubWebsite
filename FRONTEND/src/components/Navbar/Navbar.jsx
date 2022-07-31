import React, { Fragment, useEffect, useState } from "react";
import Logo from "../../media/logo.png";
// import { useDispatch, useSelector } from "react-redux";
// import { getEvents } from "../../actions/events";
import "./Navbar.css";
import { Outlet } from "react-router-dom";

function Navbar() {
	const [menu, setMenu] = useState(false);
	// const dispatch = useDispatch();
	// useEffect(() => {
	// 	dispatch(getEvents());
	// }, [dispatch]);
	// const events = useSelector((state) => state.events);

	return (
		<Fragment>
			<nav className={menu ? "menu-active" : "navbar"}>
				<div className='nav-logo'>
					<img src={Logo} className='logo' alt='logo' />
					<span className='logo-name'>Insights Club</span>
				</div>
				<div className='push-left'>
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

					<ul id='primary-menu' className='menu nav-menu'>
						<li className='menu-item current-menu-item'>
							<a className='nav__link' href='/'>
								Home
							</a>
						</li>
						<li className='menu-item dropdown'>
							<a className='nav__link' href='/events'>
								Events
							</a>
						</li>
						<li className='menu-item dropdown'>
							<a className='nav__link' href='/blogs'>
								Blogs
							</a>
						</li>
						<li className='menu-item dropdown'>
							<a className='nav__link' href='/about'>
								About
							</a>
						</li>
					</ul>
				</div>
			</nav>
			<Outlet/>
		</Fragment>
	);
}

export default Navbar;
