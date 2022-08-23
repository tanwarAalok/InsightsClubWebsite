import { combineReducers } from "redux";

import blogs from "./blogs";
import events from "./events";
import article from "./article";

export const reducers = combineReducers({ blogs, events, article });
