import { commentsStore } from "./../../types/storeType";
import { Reducer } from "redux";
import { commentAction } from "../../types/actionTypes";

// type actions = gotPosts;

const initialState: commentsStore = {
  comments: [],
  loading: false,
};

const commentReducer: Reducer<commentsStore> = (
  state = initialState,
  action: commentAction
) => {
  switch (action.type) {
    case "GOT_COMMENTS":
      return {
        ...state,
        loading: false,
        comments: action.payload,
      };
    case "COMMENTS_PENDING":
      return {
        ...state,
        loading: true,
      };

    case "COMMENTS_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return { ...state };
  }
};

export default commentReducer;
