import React, { useEffect, useState } from "react";
import Blog from "./Blog";
import axios from "axios";
import { useCookies } from "react-cookie";

const url = "http://localhost:8080/blog/user";

function Blogs() {
	const [blogs, setBlogs] = useState([]);
	const [cookies, setCookies] = useCookies();
	const c = cookies.user.id;
	useEffect(() => {
		axios.get(`${url}/${c}`).then((res) => setBlogs(res.data));
	}, []);
	return (
		<>
			{blogs.map((b, i) => (
				<Blog blog={b} key={i} />
			))}
		</>
	);
}

export default Blogs;
