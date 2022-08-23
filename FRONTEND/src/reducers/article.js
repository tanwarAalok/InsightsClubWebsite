import {
	FETCH_ALL,
	CREATE,
	UPDATE,
	DELETE,
} from "../constants/articleActionTypes";

const articleReducer = (article = [], action) => {
	switch (action.type) {
		case FETCH_ALL:
			return action.payload;
		case CREATE:
			return [...article, action.payload];
		case UPDATE:
			return article.map((blog) =>
				blog._id === action.payload._id ? action.payload : blog
			);
		case DELETE:
			return article.filter((blog) => blog._id !== action.payload);
		default:
			return article;
	}
};

export default articleReducer;
