import { Dispatch, SetStateAction } from "react";
import { Container, Dropdown } from "react-bootstrap";

function Sort({
  sort,
  setSort,
}: {
  sort: boolean;
  setSort: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <Container className="mb-3 d-flex justify-content-end">
      <Dropdown>
        <Dropdown.Toggle variant="light" id="dropdown-basic">
          {sort ? "Sort by title" : "Default"}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={() => setSort(false)}>Default</Dropdown.Item>
          <Dropdown.Item onClick={() => setSort(true)}>
            Sort by title
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Container>
  );
}

export default Sort;
