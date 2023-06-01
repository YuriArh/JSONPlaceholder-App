import { PaginationControl } from "react-bootstrap-pagination-control";
import { Dispatch, SetStateAction } from "react";

type PaginationType = {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  limit: number;
  total: number;
};

function Pagination({ page, setPage, limit, total }: PaginationType) {
  return (
    <PaginationControl
      page={page}
      between={4}
      total={total}
      limit={limit}
      changePage={(page) => {
        setPage(page);
      }}
      ellipsis={1}
    />
  );
}

export default Pagination;
