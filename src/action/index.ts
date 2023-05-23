import { getPostsActionCreator } from "./../types/actionCreatorTypes";

export const getPosts: getPostsActionCreator = () => {
  return {
    type: "GET_POSTS",
  };
};
