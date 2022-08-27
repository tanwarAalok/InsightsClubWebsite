import { useState } from "react";
import { useDispatch } from "react-redux";
import "./Create.css";
import { createBlogs } from "../../../actions/blogs";
import Navbar from "../../Navbar/Navbar.jsx";
import { EditorState, ContentState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const Create = () => {
	const dispatch = useDispatch();
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const [author, setAuthor] = useState("");
	const [description, setDescription] = useState("");
	const [tags, setTags] = useState("");
	const [editorState, setEditorState] = useState(EditorState.createEmpty());
	const [saving, setSaving] = useState(false);
	const [error, setError] = useState("");

	const postBlog = async (e) => {
		e.preventDefault();
		if (title === "" || content === "" || author === "") {
			setError("Please fill out all fields.");
			return null;
		}
		setError("");
		setSaving(true);
		const data = {
			title,
			description,
			tags: tags.split(" "),
			content,
			author,
		};
		console.log(data);
		try {
			dispatch(createBlogs(data));
		} catch (error) {
			setError(error.message);
		} finally {
			setSaving(false);
		}
	};

	return (
		<div className='create-blog-main-container'>
			<Navbar />
			<p className='create-blog-heading'>Create Your Blog</p>
			<div className='create-blog-form-group'>
				<form>
					<label className='create-blog-title'>Title:</label>
					<br />
					<input
						type='text'
						name='title'
						value={title}
						id='title'
						placeholder='Enter a title'
						disabled={saving}
						onChange={(event) => {
							setTitle(event.target.value);
						}}
					/>
				</form>
				<form>
					<label className='create-blog-author'>Author:</label>
					<input
						type='text'
						name='author'
						value={author}
						id='author'
						placeholder='Enter Your Name'
						disabled={saving}
						onChange={(event) => {
							setAuthor(event.target.value);
						}}
					/>
				</form>
				<form>
					<label className='create-blog-description'>Description:</label>
					<input
						type='text'
						name='description'
						value={description}
						id='description'
						placeholder='Enter a short description'
						disabled={saving}
						onChange={(event) => {
							setDescription(event.target.value);
						}}
					/>
				</form>
				<form>
					<label>Content</label>
					<Editor
						editorState={editorState}
						wrapperClassName='card'
						editorClassName='card-body'
						onEditorStateChange={(newState) => {
							setEditorState(newState);
							setContent(
								draftToHtml(convertToRaw(newState.getCurrentContent()))
							);
						}}
						toolbar={{
							options: [
								"inline",
								"blockType",
								"fontSize",
								"list",
								"textAlign",
								"history",
								"embedded",
								"emoji",
								"image",
							],
							inline: { inDropdown: true },
							list: { inDropdown: true },
							textAlign: { inDropdown: true },
							link: { inDropdown: true },
							history: { inDropdown: true },
						}}
					/>
				</form>
				<form>
					<label className='create-blog-headline'>Tags: </label>
					<input
						type='text'
						name='tags'
						value={tags}
						id='tags'
						placeholder='Enter a tags with spaces'
						disabled={saving}
						onChange={(event) => {
							setTags(event.target.value);
						}}
					/>
				</form>
				<form>
					<button
						className='create-blog-post-button'
						onClick={(e) => postBlog(e)}>
						Publish
					</button>
				</form>
			</div>
			<form className='create-blog-preview'>
				<label>Preview</label>
				<div className='create-blog-preview-body'>
					<div
						dangerouslySetInnerHTML={{
							__html: content,
						}}
					/>
				</div>
			</form>
			<p> error: {error}</p>
		</div>
	);
};

export default Create;
