import { postsStore } from "./../../types/storeType";
import { Reducer } from "redux";
import { postAction } from "../../types/actionTypes";

// type actions = gotPosts;

const initialState: postsStore = {
  posts: [],
  loading: false,
  error: "",
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
        posts: action.payload,
        error: "",
      };
    case "POSTS_PENDING":
      return {
        ...state,
        loading: true,
        error: "",
      };

    case "POSTS_ERROR":
      return {
        posts: [],
        loading: false,
        error: action.payload,
      };
    default:
      return { ...state };
  }
};

export default postsReducer;
