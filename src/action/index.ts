import {
  getPostsActionCreator,
  getCommentsActionCreator,
  getUserActionCreator,
} from "./../types/actionCreatorTypes";

export const getPosts: getPostsActionCreator = (params: string) => {
  return {
    type: "GET_POSTS",
    payload: {
      params,
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

export const getUser: getUserActionCreator = (params: string) => {
  return {
    type: "GET_USER",
    payload: {
      params,
    },
  };
};
