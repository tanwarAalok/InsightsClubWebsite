import React from "react";
import Blog from "./Blog";

let blog = [
	{
		author: { name: "Dummy Name" },
		createdAt: "3d ago",
		comments:300,
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam est, praesentium porro, officiis numquam, cumque voluptatum reiciendis aliquid nemo eos deserunt esse iste fuga magnam facilis ex totam eum ad?",
		likes: 1,
	},
	{
		author: { name: "Dummy Name" },
		createdAt: "3d ago",
		comments:300,
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam est, praesentium porro, officiis numquam, cumque voluptatum reiciendis aliquid nemo eos deserunt esse iste fuga magnam facilis ex totam eum ad?",
		likes: 1,
	},
	{
		author: { name: "Dummy Name" },
		createdAt: "3d ago",
		comments:300,
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam est, praesentium porro, officiis numquam, cumque voluptatum reiciendis aliquid nemo eos deserunt esse iste fuga magnam facilis ex totam eum ad?",
		likes: 1,
	},
	{
		author: { name: "Dummy Name" },
		createdAt: "3d ago",
		comments:300,
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam est, praesentium porro, officiis numquam, cumque voluptatum reiciendis aliquid nemo eos deserunt esse iste fuga magnam facilis ex totam eum ad?",
		likes: 1,
	},
];

function Blogs() {
	return (
		<>
			{blog.map((b, i) => (
				<Blog blog={b} key={i} />
			))}
		</>
	);
}

export default Blogs;
