import React from "react";
import "./DetailedArticle.css";
import test from "../../../media/test.png";

function DetailedArticle() {
	return (
		<>
			<div className='detailedArticle-container'>
				<div className='detailedArticle-header'>
					<p className='detailedArticle-header-topic'>TOPIC</p>
					<p className='detailedArticle-header-author'>username</p>
				</div>
				<div className='detailedArticle-main'>
					<div className='detailedArticle-main-upper'>
						<div className='detailedArticle-upper-images'>
							<img src={test} alt='dummy' />
							<img src={test} alt='dummy' />
						</div>
						<div className='detailedArticle-upper-content'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
							laboriosam iste fugiat possimus consequatur praesentium, iusto
							unde? Labore tempora officia saepe minus facere numquam in,
							accusantium corrupti similique dolorem obcaecati.
						</div>
					</div>
					<div className='detailedArticle-main-lower'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
						laboriosam iste fugiat possimus consequatur praesentium, iusto unde?
						Labore tempora officia saepe minus facere numquam in, accusantium
						corrupti similique dolorem obcaecati.
					</div>
				</div>
			</div>
		</>
	);
}

export default DetailedArticle;
