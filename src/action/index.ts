import {
  getPostsActionCreator,
  getCommentsActionCreator,
} from "./../types/actionCreatorTypes";

export const getPosts: getPostsActionCreator = (params?: string) => {
  return {
    type: "GET_POSTS",
    payload: {
      params: params ? params : "",
    },
  };
};

export const getComments: getCommentsActionCreator = (id: number) => {
  return {
    type: "GET_COMMENTS",
    payload: {
      id: id,
    },
  };
};
