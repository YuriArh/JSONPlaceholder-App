import { combineReducers } from "redux";

import postsReducer from "./postsReducer";
import commentReducer from "./commentsReducer";

const store = {
  posts: postsReducer,
  comments: commentReducer,
};

export default combineReducers(store);
