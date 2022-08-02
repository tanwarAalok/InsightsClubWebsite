import React, { Fragment } from "react";
import Intro from "./landing-intro/Intro";
import EventSlides from "./landing-events/Event-Slides";
import Domains from "./landing-domains/Domains";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

function Landing() {
	return (
		<Fragment>
			<Intro />
			<EventSlides />
			<Domains />
			<Footer />
			<Outlet />
		</Fragment>
	);
}

export default Landing;
