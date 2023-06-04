import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

function BackButton() {
  const navigate = useNavigate();

  return (
    <Button variant="light" className="mb-3" onClick={() => navigate(-1)}>
      Back
    </Button>
  );
}

export default BackButton;
