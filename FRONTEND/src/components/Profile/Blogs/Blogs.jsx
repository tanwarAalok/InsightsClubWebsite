import React, { useEffect, useState } from "react";
import Blog from "./Blog";
import axios from "axios";
import { useCookies } from "react-cookie";

const url = "https://insights-api.onrender.com/blog/user";

function Blogs() {
	const [blogs, setBlogs] = useState([]);
	const [cookies, setCookies] = useCookies();

	useEffect(() => {
		axios.get(`${url}/${cookies.user.id}`).then((res) => setBlogs(res.data));
	}, [cookies]);
	return (
		<>
			{blogs.map((b, i) => (
				<Blog blog={b} key={i} />
			))}
		</>
	);
}

export default Blogs;
