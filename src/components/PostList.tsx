import Post from "./Post";
import { Accordion } from "react-bootstrap";
import { post } from "../types/storeType";

function PostList(props: { posts: post[] }) {
  return (
    <Accordion className="container-md">
      {props.posts?.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </Accordion>
  );
}

export default PostList;
