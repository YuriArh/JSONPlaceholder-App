import { useEffect } from "react";
import { getComments } from "../action";
import { useDispatch, useSelector } from "react-redux";
import storeType from "../types/storeType";
import { comment } from "../types/storeType";
import { Card } from "react-bootstrap";

function Comments(props: { id: number }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getComments(props.id));
  }, []);
  const comments = useSelector((store: storeType) => store.comments.comments);
  console.log(comments);
  return (
    <ul>
      {comments
        ? comments.map((item: comment) => {
            return (
              <Card key={item.id} border="light">
                <Card.Body>
                  <Card.Title>{item.email}</Card.Title>
                  <Card.Body>{item.body}</Card.Body>
                </Card.Body>
              </Card>
            );
          })
        : ""}
    </ul>
  );
}

export default Comments;
