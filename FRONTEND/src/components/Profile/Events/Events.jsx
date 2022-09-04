import React from "react";
import Event from "./Event";

let event = [
	{
		eventName: "EVENT Name",
		createdAt: "3d ago",
		date:"August 31, 2022",
		time:"21:30",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam est, praesentium porro, officiis numquam, cumque voluptatum reiciendis aliquid nemo eos deserunt esse iste fuga magnam facilis ex totam eum ad?",
		mode:"online",
		venue:"mph",
	},
	{
		eventName: "EVENT Name" ,
		createdAt: "3d ago",
		date:"August 31, 2022",
		time:"21:30",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam est, praesentium porro, officiis numquam, cumque voluptatum reiciendis aliquid nemo eos deserunt esse iste fuga magnam facilis ex totam eum ad?",
		mode:"online",
		venue:"mph",	
	},
	{
		eventname: "EVENT Name" ,
		createdAt: "3d ago",
		date:"August 31, 2022",
		time:"21:30",
		mode:"online",
		venue:"mph",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam est, praesentium porro, officiis numquam, cumque voluptatum reiciendis aliquid nemo eos deserunt esse iste fuga magnam facilis ex totam eum ad?",
	},
	{
		eventName: "EVENT Name" ,
		createdAt: "3d ago",
		mode:"online",
		date:"August 31, 2022",
		time:"21:30",
		venue:"mph",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam est, praesentium porro, officiis numquam, cumque voluptatum reiciendis aliquid nemo eos deserunt esse iste fuga magnam facilis ex totam eum ad?",
	},
];

function Events() {
	return (
		<div>
			{event.map((b, i) => (
				<Event event={b} key={i} />
			))}
		</div>
	);
}

export default Events;
