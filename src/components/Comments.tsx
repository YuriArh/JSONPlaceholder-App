import { useEffect } from "react";
import { getComments } from "../action";
import { useDispatch, useSelector } from "react-redux";
import storeType from "../types/storeType";
import { comment } from "../types/storeType";
import { Card, Container } from "react-bootstrap";
import { FadeLoader } from "react-spinners";

function Comments(props: { id: number }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getComments(props.id));
  }, []);
  const comments = useSelector((store: storeType) => store.comments.comments);
  const loading = useSelector((store: storeType) => store.comments.loading);
  return (
    <ul>
      {!loading ? (
        comments.map((item: comment) => {
          return (
            <Card key={item.id} border="light">
              <Card.Body>
                <Card.Title>{item.email}</Card.Title>
                <Card.Body>{item.body}</Card.Body>
              </Card.Body>
            </Card>
          );
        })
      ) : (
        <Container className="d-flex justify-content-center mt-5 mb-5">
          <FadeLoader color="#106cf6" />
        </Container>
      )}
    </ul>
  );
}

export default Comments;
