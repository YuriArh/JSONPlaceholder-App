export type post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

export interface postsStore {
  posts: post[] | [];
  loading: boolean;
}

export type comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export interface commentsStore {
  comments: comment[] | [];
  loading: boolean;
}

interface storeType {
  posts: postsStore;
  comments: commentsStore;
}

export default storeType;
