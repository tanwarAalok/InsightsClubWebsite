import React from "react";
import RichEditorExample from "./Editor";
import "./CreateBlog.css";
import BlogsSideBar from "../BlogSiderbar/BlogsSideBar";

function CreateBlog() {
	const sideBarElement = [
		{ Element: { name: "Home", address: "/" } },
		{ Element: { name: "Event", address: "/" } },
		{ Element: { name: "Domains", address: "/" } },
		{ Element: { name: "Blog", address: "/blogs" } },
		{ Element: { name: "Bookedmarked", address: "/" } },
	];
	return (
		<div className='createBlog-container'>
			<div className='createBlog-container-sidebar'>
				<BlogsSideBar array={sideBarElement} />
			</div>
			<div className='editor-container'>
				<p className='createBlog-heading'>Write a Blog</p>
				<RichEditorExample />
				<button className='createBlog-publishbutton'>Publish</button>
			</div>
		</div>
	);
}

export default CreateBlog;
