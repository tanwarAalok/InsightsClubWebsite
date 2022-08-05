import {
	FETCH_ALL,
	CREATE,
	UPDATE,
	DELETE,
} from "../constants/blogsActionTypes";

const blogsReducer = (blogs = [], action) => {
	switch (action.type) {
		case FETCH_ALL:
			return action.payload;
		case CREATE:
			return [...blogs, action.payload];
		case UPDATE:
			return blogs.map((blog) =>
				blog._id === action.payload._id ? action.payload : blog
			);
		case DELETE:
			return blogs.filter((blog) => blog._id !== action.payload);
		default:
			return blogs;
	}
};

export default blogsReducer;
