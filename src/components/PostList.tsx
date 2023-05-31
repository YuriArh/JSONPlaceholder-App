import { useState } from "react";
import Post from "./Post";
import { post } from "../types/storeType";
import { Container } from "react-bootstrap";

function PostList(props: { posts: post[] }) {
  const [openPostId, setOpenPostId] = useState<number | null>(null);

  const toggleComments = (postId: number) => {
    setOpenPostId((prevOpenPostId) =>
      prevOpenPostId === postId ? null : postId
    );
  };
  return (
    <Container>
      {props.posts?.map((post) => (
        <Post
          openPostId={openPostId}
          key={post.id}
          post={post}
          toggleComments={toggleComments}
        />
      ))}
    </Container>
  );
}

export default PostList;
