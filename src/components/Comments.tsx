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
  const error = useSelector((store: storeType) => store.comments.error);
  return (
    <>
      {!loading ? (
        comments.map((item: comment) => {
          return (
            <Card key={item.id} border="light" className="p-3">
              <Card.Title>{item.email}</Card.Title>
              <Card.Body>{item.body}</Card.Body>
            </Card>
          );
        })
      ) : !error ? (
        <Container className="d-flex justify-content-center mt-5 mb-5">
          <FadeLoader color="#106cf6" />
        </Container>
      ) : (
        ""
      )}
      <Container className="d-flex justify-content-center mt-5 mb-5">
        {error}
      </Container>
    </>
  );
}

export default Comments;
