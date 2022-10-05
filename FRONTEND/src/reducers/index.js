import { combineReducers } from "redux";

import blogs from "./blogs";
import { eventsReducer, newEventReducer } from "./events";
import article from "./article";

export const reducers = combineReducers({
  blogs: blogs,
  events: eventsReducer,
  article: article,
  newEvent: newEventReducer,
});
