export type post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

interface storeType {
  posts: post[] | [];
  loading: boolean;
}

export default storeType;
