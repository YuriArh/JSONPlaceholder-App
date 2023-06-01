import { post } from "../types/storeType";
import { Accordion, Card, Button, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import Comments from "./Comments";
import avatar from "../assets/avatar.svg";

function Post(props: {
  post: post;
  openPostId: number | null;
  toggleComments: (postId: number) => void;
}) {
  const { post, openPostId, toggleComments } = props;

  return (
    <Accordion defaultActiveKey="1">
      <Card key={post.id} className="mb-4">
        <Card.Body>
          <Stack
            direction="horizontal"
            gap={3}
            style={{ alignItems: "flex-start" }}
          >
            <Link to={`user?id=${post.userId}`}>
              <img
                src={avatar}
                style={{ width: "100px", height: "100%", border: "none" }}
              />
            </Link>

            <div>
              <Card.Title>{post.title}</Card.Title>
              <Card.Text>{post.body}</Card.Text>
            </div>
          </Stack>
          <Button className="mt-3" onClick={() => toggleComments(post.id)}>
            {openPostId === post.id ? "Hide comments" : "Show comments"}
          </Button>
          {openPostId === post.id && (
            <div>
              <h5 className="mt-4">Comments:</h5>
              <Comments id={post.id}></Comments>
            </div>
          )}
        </Card.Body>
      </Card>
    </Accordion>
  );
}

export default Post;
