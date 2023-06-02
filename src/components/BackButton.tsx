import { Link } from "react-router-dom";
import { Button, Container } from "react-bootstrap";

function BackButton() {
  return (
    <Container>
      <Link to={"/"}>
        <Button variant="light" className="mb-3">
          Back
        </Button>
      </Link>
    </Container>
  );
}

export default BackButton;
