import { useNavigate } from "react-router-dom";
import { Button, Container } from "react-bootstrap";

function BackButton() {
  const navigate = useNavigate();

  return (
    <Container>
      <Button variant="light" className="mb-3" onClick={() => navigate(-1)}>
        Back
      </Button>
    </Container>
  );
}

export default BackButton;
