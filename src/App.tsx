import Header from "./components/Header";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getPosts } from "./action";
import { useDispatch } from "react-redux";
import PostList from "./components/PostList";
import storeType from "./types/storeType";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [getPosts]);
  const posts = useSelector((store: storeType) => store.posts.posts);
  console.log(posts);
  return (
    <>
      <Header />
      {posts ? <PostList posts={posts} /> : ""}
    </>
  );
}

export default App;
