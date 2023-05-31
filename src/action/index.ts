import {
  getPostsActionCreator,
  getCommentsActionCreator,
} from "./../types/actionCreatorTypes";

export const getPosts: getPostsActionCreator = (
  term?: string | number,
  page?: number | string,
  limit?: string | number
) => {
  const checkParam = (val?: string | number) => {
    return val ? val : "";
  };
  return {
    type: "GET_POSTS",
    payload: {
      term: checkParam(term),
      page: checkParam(page),
      limit: checkParam(limit),
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
