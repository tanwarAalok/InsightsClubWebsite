import React from "react";
import "./DetailedArticle.css";
import { useNavigate } from "react-router-dom";
import test from "../../../media/test.png";

function DetailedArticle() {
	const navigate = useNavigate();

	return (
		<>
			<div className='detailedArticle-container'>
				<div className='detailedArticle-header'>
					<div
						className='detailedArticle-header-backArrow'
						onClick={() => navigate("/articles")}>
						&#10094;
					</div>
					<p>Articles</p>
				</div>
				<div className='detailedArticle-main'>
					<div className='detailedArticle-header-details'>
						<p className='detailedArticle-header-topic'>Test Article</p>
						<p className='detailedArticle-header-author'>jon wic</p>
					</div>
					<div className='detailedArticle-main-upper'>
						<div className='detailedArticle-upper-images'>
							<img src={test} alt='dummy' />
							<img src={test} alt='dummy' />
						</div>
						<div className='detailedArticle-upper-content'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
							laboriosam iste fugiat possimus consequatur praesentium, iusto
							unde? Labore tempora officia saepe minus facere numquam in,
							accusantium corrupti similique dolorem obcaecati. Lorem ipsum
							dolor sit amet consectetur adipisicing elit. Eaque laboriosam iste
							fugiat possimus consequatur praesentium, iusto unde? Labore
							tempora officia saepe minus facere numquam in, accusantium
							corrupti similique dolorem obcaecati. Lorem ipsum dolor sit amet
							consectetur adipisicing elit. Eaque laboriosam iste fugiat
							possimus consequatur praesentium, iusto unde? Labore tempora
							officia saepe minus facere numquam in, accusantium corrupti
							similique dolorem obcaecati. Lorem ipsum dolor sit amet
							consectetur adipisicing elit. Eaque laboriosam iste fugiat
							possimus consequatur praesentium, iusto unde? Labore tempora
							officia saepe minus facere numquam in, accusantium corrupti
							similique dolorem obcaecati. Lorem ipsum dolor sit amet
							consectetur adipisicing elit. Eaque laboriosam iste fugiat
							possimus consequatur praesentium, iusto unde? Labore tempora
							officia saepe minus facere numquam in, accusantium corrupti
							similique dolorem obcaecati. Lorem ipsum dolor sit amet
							consectetur adipisicing elit. Eaque laboriosam iste fugiat
							possimus consequatur praesentium, iusto unde? Labore tempora
							officia saepe minus facere numquam in, accusantium corrupti
							similique dolorem obcaecati.
						</div>
					</div>
					<div className='detailedArticle-main-lower'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
						laboriosam iste fugiat possimus consequatur praesentium, iusto unde?
						Labore tempora officia saepe minus facere numquam in, accusantium
						corrupti similique dolorem obcaecati. Lorem ipsum dolor sit amet
						consectetur adipisicing elit. Eaque laboriosam iste fugiat possimus
						consequatur praesentium, iusto unde? Labore tempora officia saepe
						minus facere numquam in, accusantium corrupti similique dolorem
						obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Eaque laboriosam iste fugiat possimus consequatur praesentium, iusto
						unde? Labore tempora officia saepe minus facere numquam in,
						accusantium corrupti similique dolorem obcaecati.
					</div>
				</div>
			</div>
		</>
	);
}

export default DetailedArticle;
