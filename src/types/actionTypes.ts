import { post, comment } from "./storeType";

export interface getPosts {
  type: "GET_POSTS";
}

export interface getComments {
  type: "GET_COMMENTS";
  payload: {
    id: number;
  };
}

export const actionIds = {
  GET_POSTS: "GET_POSTS",
  GET_COMMENTS: "GET_COMMENTS",
};

export interface postsPending {
  type: "POSTS_PENDING";
}

export interface gotPosts {
  type: "GOT_POSTS";
  payload: post[];
}

export interface postsError {
  type: "POSTS_ERROR";
  payload: string;
}

export type postAction = postsPending | gotPosts | postsError;

export interface commentsPending {
  type: "COMMENTS_PENDING";
}

export interface gotComments {
  type: "GOT_COMMENTS";
  payload: comment[];
}

export interface commentsError {
  type: "COMMENTS_ERROR";
  payload: string;
}

export type commentAction = commentsPending | gotComments | commentsError;

export type Params = { id: number; type: string };
