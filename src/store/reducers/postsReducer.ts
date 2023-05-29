import { postsStore } from "./../../types/storeType";
import { Reducer } from "redux";
import { postAction } from "../../types/actionTypes";

// type actions = gotPosts;

const initialState: postsStore = {
  posts: [],
  loading: false,
};

const postsReducer: Reducer<postsStore> = (
  state = initialState,
  action: postAction
) => {
  switch (action.type) {
    case "GOT_POSTS":
      return {
        ...state,
        loading: false,
        posts: [...state.posts, ...action.payload],
      };
    case "POSTS_PENDING":
      return {
        ...state,
        loading: true,
      };

    case "POSTS_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return { ...state };
  }
};

export default postsReducer;
