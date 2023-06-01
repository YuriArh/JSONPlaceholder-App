import { combineReducers } from "redux";

import postsReducer from "./postsReducer";
import commentReducer from "./commentsReducer";
import userReducer from "./userReducer";

const store = {
  posts: postsReducer,
  comments: commentReducer,
  user: userReducer,
};

export default combineReducers(store);
