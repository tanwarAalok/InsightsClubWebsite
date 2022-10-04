import React from "react";
import "./BlogsSideBar.css";

function BlogsSideBar({ array }) {
	return (
		<>
			<div className='blogs-sidebar-container'>
				<ul className='blogs-sidebar-list'>
					{array.map((item, index) => (
						<a key={index} href={item.Element.address}>
							<li className='blogs-sidebar-list-element' key={index}>
								{item.Element.name}
							</li>
						</a>
					))}
				</ul>
			</div>
		</>
	);
}

export default BlogsSideBar;
