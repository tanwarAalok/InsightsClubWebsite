import React from "react";
import RichEditorExample from "./Editor";
import "./CreateBlog.css";

function CreateBlog() {
	return (
		<div className='createBlog-container'>
			<p className='createBlog-heading'>Write a Blog</p>
			<div className='editor-container'>
				<RichEditorExample />
			</div>
			<button className='createBlog-publishbutton'>Publish</button>
		</div>
	);
}

export default CreateBlog;
