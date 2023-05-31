import Header from "./components/Header";
import { useEffect } from "react";
import { useState } from "react";
import { getPosts } from "./action";
import { useDispatch, useSelector } from "react-redux";
import PostList from "./components/PostList";
import storeType from "./types/storeType";
import Search from "./components/Search";

function App() {
  const dispatch = useDispatch();
  const [term, setTerm] = useState<string>("");
  useEffect(() => {
    term ? dispatch(getPosts(`title=${term}`)) : dispatch(getPosts());
  }, [term]);
  const posts = useSelector((store: storeType) => store.posts.posts);
  console.log(term);
  return (
    <>
      <Header />
      <Search term={term} setTerm={setTerm} />
      {posts ? <PostList posts={posts} /> : ""}
    </>
  );
}

export default App;
