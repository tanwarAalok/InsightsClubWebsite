import React, { useEffect } from "react";
import Blog from "./Blog/Blog";
import "./Blogs.css";
import WRITE from "../../media/createBlog.svg";
import { getBlogs } from "../../actions/blogs";
import { useSelector, useDispatch } from "react-redux";
import BlogsSideBar from "./BlogSiderbar/BlogsSideBar";

const dummyData = [
	{
		_id: "62e69b2e116100bd3c8958b1",
		title: "First blog on this site !!!",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed Ut enim ad minim veniam, quis modo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur ui officia deserunt mollit anim id est laborum.",
		tags: ["dev", "testing", "api"],
		author: {
			_id: "62dd21b15ccff1c1e20d6745",
			username: "test",
			name: "Yashv",
			email: "yashvardhan.ys86@gmail.com",
			createdAt: "2022-07-24T10:40:49.260Z",
			updatedAt: "2022-07-24T10:45:31.537Z",
			__v: 0,
			isAdmin: false,
			isCoAdmin: true,
		},
	},
	{
		_id: "62e6a90c64ac2081db10b1c3",
		title: "Second blog on this site !!!",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed Ut enim ad minim veniam, quis modo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur ui officia deserunt mollit anim id est laborum.",
		tags: ["dev", "testing", "api", "second-blog"],
		author: {
			_id: "62dd21b15ccff1c1e20d6745",
			username: "test",
			name: "Yashv",
			email: "yashvardhan.ys86@gmail.com",
			createdAt: "2022-07-24T10:40:49.260Z",
			updatedAt: "2022-07-24T10:45:31.537Z",
			__v: 0,
			isAdmin: false,
			isCoAdmin: true,
		},
	},
];

function Blogs() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getBlogs());
	}, [dispatch]);

	const Blogs = useSelector((state) => state.blogs);

	const sideBarElement = [
		{ Element: { name: "Home", address: "/" } },
		{ Element: { name: "Event", address: "/" } },
		{ Element: { name: "Domains", address: "/" } },
		{ Element: { name: "Blog", address: "/" } },
		{ Element: { name: "Bookedmarked", address: "/" } },
	];
	const RecentlySeen = [
		{ Element: { name: "coding techBlog 1", address: "/" } },
		{ Element: { name: "photgraphy nature Blog 2", address: "/" } },
	];

	return (
		<>
			<div className='blogs-header'></div>
			<div className='blogs-main-container'>
				<div className='blogs-sidebar-container'>
					<BlogsSideBar array={sideBarElement} />
				</div>

				<div className='blogs-container'>
					<div className='blogs-container-header'>
						<div className='blogs-container-sort'>
							<p>
								<a href='#'>Latest</a>
							</p>
							<p>
								<a href='#'>Top</a>
							</p>
							<p>
								<a href='#'>Saved</a>
							</p>
						</div>
						<div className='blogs-container-header-createBlog'>
							<p>
								<a href='/write'>Wirte a Blog</a>
							</p>
							<img src={WRITE} alt='write' />
						</div>
					</div>
					{dummyData.map((blog, key) => (
						<>
							<Blog blog={blog} key={key} />
						</>
					))}
				</div>
				<div className='blogs-recently-queried'>
					<p className='blogs-recently-queried-heading'>Recently queried</p>
					<ul className='blogs-recently-queried-list'>
						{RecentlySeen.map((item, index) => (
							<a href={item.Element.address}>
								<li className='blogs-recently-queried-list-element'>
									{item.Element.name}
								</li>
							</a>
						))}
					</ul>
				</div>
			</div>
		</>
	);
}

export default Blogs;
