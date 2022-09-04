import React from "react";
import LOGO from "../../../media/InsightsLogo.svg";
import MENU from "../../../media/hamburger-menu.svg";
import "./BlogsNavbar.css";

function BlogsNavbar() {
	return (
		<>
			<div className='blogsnavbar-nav'>
				<div className='blogsnavbar-logo'>
					<img src={LOGO} alt='logo' />
				</div>
				<div className='blogsnavbar-search_box'>
					<input type='search' placeholder='Search by title or name...' />
				</div>
				<div className='blogsnavbar-hambugermenu'>
					<img src={MENU} alt='menu' />
				</div>
			</div>
		</>
	);
}

export default BlogsNavbar;
