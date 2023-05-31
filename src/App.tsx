import Header from "./components/Header";
import { useEffect, useState } from "react";
import { getPosts } from "./action";
import { useDispatch, useSelector } from "react-redux";
import PostList from "./components/PostList";
import storeType from "./types/storeType";
import Search from "./components/Search";

function App() {
  const limit: number = 20;

  const [term, setTerm] = useState<string>("");
  const [page, setPage] = useState<number>(1);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts(term, page, limit));
  }, [term]);
  const posts = useSelector((store: storeType) => store.posts.posts);
  return (
    <>
      <Header />
      <Search term={term} setTerm={setTerm} />
      {posts ? <PostList posts={posts} /> : ""}
    </>
  );
}

export default App;
