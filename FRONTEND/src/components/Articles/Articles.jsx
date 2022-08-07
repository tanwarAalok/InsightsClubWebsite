import React from "react";
import Article from "./Article/Article";
import "./Articles.css";

const article = {
	id: "1",
	title: "Test Article",
	content:
		"asdkj asdklasjd askldsjdd askldalksjd asskljdlkasjdd asdkj asdklasjd askldsjdd askldalksjd asskljdlkasjdd asdkj asdklasjd askldsjdd askldalksjd asskljdlkasjdd asdkj asdklasjd askldsjdd askldalksjd asskljdlkasjdd asdkj asdklasjd askldsjdd askldalksjd asskljdlkasjdd",
	author: "jon wic",
	createdAt: "1/1/1",
};

function Articles() {
	return (
		<>
			<div className='articles-main-container'>
				<div className='articles-header'>Articles</div>
				<div className='articles-container'>
					<Article article={article} />
					<Article article={article} />
					<Article article={article} />
					<Article article={article} />
					<Article article={article} />
				</div>
			</div>
		</>
	);
}

export default Articles;
