import { getPosts, getComments, getUser } from "./actionTypes";

export type getPostsActionCreator = (params: string) => getPosts;

export type getCommentsActionCreator = (id: number) => getComments;

export type getUserActionCreator = (params: string) => getUser;
