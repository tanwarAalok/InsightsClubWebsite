import {
	FETCH_ALL,
	CREATE,
	UPDATE,
	DELETE,
} from "../constants/blogsActionTypes";
import { CLEAR_ERRORS, NEW_EVENT_FAIL, NEW_EVENT_REQUEST, NEW_EVENT_RESET, NEW_EVENT_SUCCESS } from "../constants/eventsActionTypes";

export const eventsReducer = (events = [], action) => {
	switch (action.type) {
		case FETCH_ALL:
			return action.payload;
		case CREATE:
			return [...events, action.payload];
		case UPDATE:
			return events.map((event) =>
				event._id === action.payload._id ? action.payload : event
			);
		case DELETE:
			return events.filter((event) => event._id !== action.payload);
		default:
			return events;
	}
};

export const newEventReducer = (state = { event: {} }, action) => {
  switch (action.type) {
    case NEW_EVENT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_EVENT_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        event: action.payload.event,
      };
    case NEW_EVENT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_EVENT_RESET:
      return {
        ...state,
        success: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};