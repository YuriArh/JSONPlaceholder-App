import { getPosts, getComments } from "./actionTypes";

export type getPostsActionCreator = () => getPosts;
export type getCommentsActionCreator = (id: number) => getComments;
