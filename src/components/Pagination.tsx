import { PaginationControl } from "react-bootstrap-pagination-control";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Container } from "react-bootstrap";

type PaginationType = {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  limit: number;
  total: number;
};

function Pagination({ page, setPage, limit, total }: PaginationType) {
  const [windowSize, setWindowSize] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Container className="d-flex justify-content-center">
      <PaginationControl
        page={page}
        between={windowSize > 500 ? 3 : 1}
        total={total}
        limit={limit}
        changePage={(page) => {
          setPage(page);
        }}
        last
      />
    </Container>
  );
}

export default Pagination;
