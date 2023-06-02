export type post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

export type user = {
  id?: number;
  name?: string;
  username?: string;
  email?: string;
  address?: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone?: string;
  website?: string;
  company?: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

export interface postsStore {
  posts: post[] | [];
  loading: boolean;
  error: string;
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
  error: string;
}

export interface userStore {
  user: user;
  loading: boolean;
  error: string;
}

interface storeType {
  posts: postsStore;
  comments: commentsStore;
  user: userStore;
}

export default storeType;
