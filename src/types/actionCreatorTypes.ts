import { getPosts, getComments } from "./actionTypes";

export type getPostsActionCreator = (params?: string) => getPosts;
export type getCommentsActionCreator = (id: number) => getComments;
