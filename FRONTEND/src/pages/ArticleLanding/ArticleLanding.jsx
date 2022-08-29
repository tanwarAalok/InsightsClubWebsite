import React from "react";
import "./ArticleLanding.css";
import Articles from "../../components/Articles/Articles";
import Newsarticle from "./Newsletters/Newsarticle";

function ArticleLanding() {
	return (
		<div className="my" >
			<Articles />
			<Newsarticle className='we'/>
		</div>
	);
}

export default ArticleLanding;
