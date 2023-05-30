import { post } from "../types/storeType";
import { Accordion, Card, Button } from "react-bootstrap";
import Comments from "./Comments";

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
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>{post.body}</Card.Text>
          <Button onClick={() => toggleComments(post.id)}>
            {openPostId === post.id
              ? "Скрыть комментарии"
              : "Показать комментарии"}
          </Button>
          {openPostId === post.id && (
            <div>
              <h5 className="mt-4">Комментарии:</h5>
              <Comments id={post.id}></Comments>
            </div>
          )}
        </Card.Body>
      </Card>
    </Accordion>
  );
}

export default Post;
