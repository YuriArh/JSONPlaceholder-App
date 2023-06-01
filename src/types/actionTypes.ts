import { post, comment, user } from "./storeType";

export interface getPosts {
  type: "GET_POSTS";
  payload: {
    params: string;
  };
}

export interface getComments {
  type: "GET_COMMENTS";
  payload: {
    id: number;
  };
}

export interface getUser {
  type: "GET_USER";
  payload: {
    params: string;
  };
}

export const actionIds = {
  GET_POSTS: "GET_POSTS",
  GET_COMMENTS: "GET_COMMENTS",
  GET_USER: "GET_USER",
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

export interface userPending {
  type: "USER_PENDING";
}

export interface gotUser {
  type: "GOT_USER";
  payload: user;
}

export interface userError {
  type: "USER_ERROR";
  payload: string;
}

export type userAction = userPending | gotUser | userError;
