import { post } from "../types/storeType";
import { Accordion, Card } from "react-bootstrap";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
function Post(props: { post: post }) {
  return (
    <Card>
      <Card.Header>
        <h4>{props.post.title}</h4>
      </Card.Header>
      <Accordion.Collapse eventKey="0">
        <Card.Body>Hello! I'm the body</Card.Body>
      </Accordion.Collapse>
    </Card>
  );
}

export default Post;
