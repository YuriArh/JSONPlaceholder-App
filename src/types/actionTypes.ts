import { post } from "./storeType";

// For Action Creator
export interface getPosts {
  type: "GET_POSTS";
}

// For Reducers

export interface gotPosts {
  type: "GOT_POSTS";
  posts: post[];
}

export const actionIds = {
  GET_POSTS: "GET_POSTS",
};
