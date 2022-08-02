import React, { Fragment } from "react";
import Intro from "./landing-intro/Intro";
import EventSlides from "./landing-events/Event-Slides";
import Domains from "./landing-domains/Domains";
import { Outlet } from "react-router-dom";

function Landing() {
	return (
		<Fragment>
            <Intro />
			<EventSlides />
			<Outlet />
			<Domains />
		</Fragment>
	);
}

export default Landing;
