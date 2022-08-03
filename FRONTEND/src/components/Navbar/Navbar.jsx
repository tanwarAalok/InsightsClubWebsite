import React, { useEffect, useState } from "react";
import Logo from "../../media/InsightsLogo.svg";
import { useDispatch, useSelector } from "react-redux";
import { getEvents } from "../../actions/events";
import "./Navbar.css";

function Navbar() {
	const [menu, setMenu] = useState(false);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getEvents());
	}, [dispatch]);
	const events = useSelector((state) => state.events);
	console.log(events);

	return (
		<div className='nav-body'>
			<nav className={menu ? "menu-active" : "navbar"}>
				<div className='nav-logo'>
					<img src={Logo} className='logo' alt='logo' />
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
							<a className='nav_link' href='/'>
								Home
							</a>
						</li>
						<li className='menu-item dropdown'>
							<a className='nav_link' href='/events'>
								News
							</a>
						</li>
						<li className='menu-item dropdown'>
							<a className='nav_link' href='/events'>
								Events
							</a>
						</li>
						<li className='menu-item dropdown'>
							<a className='nav_link' href='/blogs'>
								Blogs
							</a>
						</li>
						<li className='menu-item dropdown'>
							<a className='nav_link' href='/about'>
								About
							</a>
						</li>
						<li className='menu-item dropdown'>
							<a className='nav_link' href='/about'>
								Contacts
							</a>
						</li>
						<li className='menu-item dropdown'>
							<a className='nav_link' href='/about'>
								<button className='navbar-login'>Login</button>
							</a>
						</li>
						<li className='menu-item dropdown'>
							<a className='nav_link' href='/about'>
								<button className='navbar-signup'>Sign up</button>
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
