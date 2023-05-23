import { Reducer } from "redux";
import { post } from "../../types/storeType";
import { gotPosts } from "../../types/actionTypes";
import storeType from "../../types/storeType";

// type actions = gotPosts;

const initialState: storeType = {
  posts: [],
  loading: false,
};

const postsReducer: Reducer<storeType> = (state = initialState, action) => {
  switch (action.type) {
    case "GOT_POSTS":
      return { ...state, posts: [...state.posts, ...action.posts] };
    default:
      return { ...state };
  }
};

export default postsReducer;
