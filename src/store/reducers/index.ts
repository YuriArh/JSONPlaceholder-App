import { combineReducers } from "redux";

import postsReducer from "./postsReducer";

const store = {
  posts: postsReducer,
};

export default combineReducers(store);
