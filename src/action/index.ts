import {
  getPostsActionCreator,
  getCommentsActionCreator,
} from "./../types/actionCreatorTypes";

export const getPosts: getPostsActionCreator = () => {
  return {
    type: "GET_POSTS",
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
