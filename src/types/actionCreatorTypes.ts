import { getPosts, getComments } from "./actionTypes";

export type getPostsActionCreator = (
  term?: string | number,
  page?: string | number,
  limit?: string | number
) => getPosts;
export type getCommentsActionCreator = (id: number) => getComments;
