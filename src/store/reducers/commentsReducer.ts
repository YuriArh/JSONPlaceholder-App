import { commentsStore } from "./../../types/storeType";
import { Reducer } from "redux";
import { commentAction } from "../../types/actionTypes";

// type actions = gotPosts;

const initialState: commentsStore = {
  comments: [],
  loading: false,
  error: "",
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
        error: "",
      };
    case "COMMENTS_PENDING":
      return {
        ...state,
        loading: true,
        error: "",
      };

    case "COMMENTS_ERROR":
      return {
        comments: [],
        loading: false,
        error: action.payload,
      };
    default:
      return { ...state };
  }
};

export default commentReducer;
