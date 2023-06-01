import Header from "./components/Header";
import { useEffect, useState } from "react";
import { getPosts } from "./action";
import { useDispatch, useSelector } from "react-redux";
import PostList from "./components/PostList";
import storeType from "./types/storeType";
import Search from "./components/Search";
import Pagination from "./components/Pagination";

function App() {
  const limit: number = 20;

  const [term, setTerm] = useState<string>("");
  const [page, setPage] = useState<number>(1);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts(term, page, limit));
  }, [term, page]);
  const posts = useSelector((store: storeType) => store.posts.posts);
  return (
    <>
      <Header />
      <Search term={term} setTerm={setTerm} />
      {posts ? <PostList posts={posts} /> : ""}
      <Pagination page={page} setPage={setPage} limit={limit} total={100} />
    </>
  );
}

export default App;
