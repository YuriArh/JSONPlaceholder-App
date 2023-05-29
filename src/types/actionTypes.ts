import { post } from "./storeType";

export interface getPosts {
  type: "GET_POSTS";
}

export const actionIds = {
  GET_POSTS: "GET_POSTS",
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
