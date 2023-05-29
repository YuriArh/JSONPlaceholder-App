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

interface storeType {
  posts: postsStore;
}

export default storeType;
