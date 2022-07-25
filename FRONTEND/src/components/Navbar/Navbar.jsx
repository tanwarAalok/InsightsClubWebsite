import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEvents } from "../../actions/events";
import "./Navbar.css";
//menu-toggler
function Navbar() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getEvents());
	}, [dispatch]);
	const events = useSelector((state) => state.events);
	console.log(events);
	return (
		<>
			<nav className='navbar'>
				<div className='logo'>{/* logo goes here */}</div>
				<div className='push-left'>
					<button id='menu-toggler' className='hamburger'>
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
			{/* Test */}
			{/* <img src={events.events[0].image.url} alt='test' /> */}
		</>
	);
}

export default Navbar;
