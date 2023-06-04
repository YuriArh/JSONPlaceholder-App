import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser, getPosts } from "../action";
import { useParams } from "react-router";
import storeType from "../types/storeType";

import Header from "../components/Header";
import PostList from "../components/PostList";
import UserCard from "../components/UserCard";
import BackButton from "../components/BackButton";
import { Container } from "react-bootstrap";
import { FadeLoader } from "react-spinners";

function UserPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(useParams());
  useEffect(() => {
    dispatch(getPosts(`/user/${id}/posts`));
    dispatch(getUser(`/users/${id}`));
  }, [id]);

  const loadingUser = useSelector((store: storeType) => store.user.loading);
  const user = useSelector((store: storeType) => store.user.user);
  const loadingPosts = useSelector((store: storeType) => store.posts.loading);
  const posts = useSelector((store: storeType) => store.posts.posts);
  const userError = useSelector((store: storeType) => store.user.error);
  const postsError = useSelector((store: storeType) => store.posts.error);

  return (
    <>
      <Header />
      <BackButton />
      {!loadingUser && !loadingPosts ? (
        <>
          {!userError ? (
            <UserCard user={user} />
          ) : (
            <Container className="d-flex justify-content-center mt-5 mb-5">
              {userError}
            </Container>
          )}
          <Container>
            <h3>Posts:</h3>
          </Container>
          {!postsError ? (
            <PostList posts={posts} />
          ) : (
            <Container className="d-flex justify-content-center mt-5 mb-5">
              {postsError}
            </Container>
          )}
        </>
      ) : (
        <Container className="d-flex justify-content-center mt-5 mb-5">
          <FadeLoader color="#106cf6" />
        </Container>
      )}
    </>
  );
}

export default UserPage;
