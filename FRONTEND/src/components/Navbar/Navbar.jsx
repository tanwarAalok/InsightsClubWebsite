import React from "react";
import "./Navbar.css";

function Navbar() {
	return (
		<>
			<nav class='navbar'>
				<div class='logo'>{/* logo goes here */}</div>
				<div class='push-left'>
					<button id='menu-toggler' data-class='menu-active' class='hamburger'>
						<span class='hamburger-line hamburger-line-top'></span>
						<span class='hamburger-line hamburger-line-middle'></span>
						<span class='hamburger-line hamburger-line-bottom'></span>
					</button>

					<ul id='primary-menu' class='menu nav-menu'>
						<li class='menu-item current-menu-item'>
							<a class='nav__link' href='#'>
								Home
							</a>
						</li>
						<li class='menu-item dropdown'>
							<a class='nav__link' href='#'>
								About
							</a>
							<ul class='sub-nav'>
								<li>
									<a class='sub-nav__link' href='#'>
										Blogs
									</a>
								</li>
								<li>
									<a class='sub-nav__link' href='#'>
										Events
									</a>
								</li>
							</ul>
						</li>
						<li class='menu-item dropdown'>
							<a class='nav__link' href='#'>
								Home
							</a>
							<ul class='sub-nav'>
								<li>
									<a class='sub-nav__link' href='#'>
										About
									</a>
								</li>
								<li>
									<a class='sub-nav__link' href='#'>
										Blogs
									</a>
								</li>
								<li>
									<a class='sub-nav__link' href='#'>
										Events
									</a>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
