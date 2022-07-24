import { combineReducers } from "redux";

import blogs from "./blogs";
import events from "./events";

export const reducers = combineReducers({ blogs, events });
