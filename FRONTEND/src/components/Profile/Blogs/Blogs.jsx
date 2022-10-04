import React, { useEffect, useState } from "react";
import Blog from "./Blog";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { deleteBlogs } from "../../../actions/blogs";

<<<<<<< Updated upstream
const url = "https://insights-club-api.onrender.com/blog/user";
=======
const url = "https://insights-api.onrender.com/blog/user";
>>>>>>> Stashed changes

function Blogs() {
	const [blogs, setBlogs] = useState([]);
	const [cookies, setCookies] = useCookies();
	const dispatch = useDispatch();

	const handleDelete = (id) => {
		dispatch(deleteBlogs(id));
	};
	useEffect(() => {
		axios.get(`${url}/${cookies.user.id}`).then((res) => setBlogs(res.data));
	}, [cookies]);
	return (
		<>
<<<<<<< Updated upstream
			{blogs.map((b, i) => (
				<Blog blog={b} key={i} handleDelete={handleDelete} />
=======
			{blogs?.map((b, i) => (
				<Blog key={i} blog={b} />
>>>>>>> Stashed changes
			))}
		</>
	);
}

export default Blogs;
