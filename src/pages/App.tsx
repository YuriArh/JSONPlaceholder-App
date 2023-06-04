import Header from "../components/Header";
import { useEffect, useState } from "react";
import { getPosts } from "../action";
import { useDispatch, useSelector } from "react-redux";
import { FadeLoader } from "react-spinners";
import { Container } from "react-bootstrap";
import PostList from "../components/PostList";
import storeType from "../types/storeType";
import Search from "../components/Search";
import Pagination from "../components/Pagination";
import Sort from "../components/Sort";

function App() {
  const limit: number = 10;

  const [term, setTerm] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [sort, setSort] = useState<boolean>(false);

  const dispatch = useDispatch();
  useEffect(() => {
    term
      ? dispatch(getPosts(`/posts?title=${term}`))
      : dispatch(getPosts(`/posts?_page=${page}&_limit=${limit}`));
  }, [term, page]);

  const posts = useSelector((store: storeType) => store.posts.posts);
  const loading = useSelector((store: storeType) => store.posts.loading);
  const error = useSelector((store: storeType) => store.posts.error);

  const sortedPosts = sort
    ? [...posts].sort((a, b) => {
        return a.title.localeCompare(b.title);
      })
    : posts;

  return (
    <>
      <Header />
      <Container>
        <Search term={term} setTerm={setTerm} />
        <Sort sort={sort} setSort={setSort} />
        {!loading && !error ? (
          <>
            <PostList posts={sortedPosts} />
            {!term && (
              <Pagination
                page={page}
                setPage={setPage}
                limit={limit}
                total={100}
              />
            )}
          </>
        ) : !error ? (
          <Container className="d-flex justify-content-center">
            <FadeLoader color="#106cf6" />
          </Container>
        ) : (
          ""
        )}

        {error}
      </Container>
    </>
  );
}

export default App;
