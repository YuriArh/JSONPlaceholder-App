import { Dispatch, SetStateAction } from "react";
import { Form, Button } from "react-bootstrap";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "../styles/searchStyle.css";

function Search({
  term,
  setTerm,
}: {
  term: string;
  setTerm: Dispatch<SetStateAction<string>>;
}) {
  return (
    <div className="mb-3" style={{ position: "relative" }}>
      <Form.Control
        className="mr-sm-2"
        placeholder="Post search"
        aria-label="Post search"
        aria-describedby="basic-addon1"
        value={term}
        onChange={(e) => {
          e.preventDefault();
          setTerm(e.target.value);
        }}
      />
      {term && (
        <Button
          variant="link"
          className="clear-btn"
          onClick={() => setTerm("")}
        >
          <AiOutlineCloseCircle />
        </Button>
      )}
    </div>
  );
}

export default Search;
