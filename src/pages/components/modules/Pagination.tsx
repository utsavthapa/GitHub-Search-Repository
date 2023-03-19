import React, { useEffect, useState } from "react";
import { data } from "../../types";

const Paginations = (props: data | any) => {
  const { data, cardPerPage, setPageNumber } = props;
  const [pageNumbers, setPageNumbers] = useState(1);
  const [showingPages, setShowingPages] = useState([1, 2, 3]);
  let totalPages = 0;
  totalPages = Math.ceil(
    data?.total_count > 1000 ? 1000 : data?.total_count / cardPerPage
  );

  console.log("totalPageCount ===> ", props, data?.total_count, totalPages);

  useEffect(() => {
    // Update showingPages when pageNumbers changes
    console.log("pageNumbers", pageNumbers);
    // debugger;
    if (pageNumbers === 1 || pageNumbers < 0) {
      setShowingPages([1, 2, 3]);
    } else if (pageNumbers === totalPages || pageNumbers > totalPages) {
      setShowingPages([totalPages - 2, totalPages - 1, totalPages]);
    } else {
      setShowingPages([pageNumbers - 1, pageNumbers, pageNumbers + 1]);
    }
  }, [pageNumbers, totalPages]);

  console.log("showingPages===>", pageNumbers, showingPages);

  return (
    <div className="pagination">
      <div className="pages">
        <button
          className="page"
          onClick={() => {
            setPageNumbers(1);
            setPageNumber(1);
          }}
        >
          First
        </button>
        {showingPages.map((value, idx) => {
          return (
            <button
              className={`${value === pageNumbers && "active"}`}
              onClick={() => {
                setPageNumbers(value);
                setPageNumber(value);
              }}
            >
              {value}
            </button>
          );
        })}{" "}
        <button
          className="page"
          onClick={() => {
            setPageNumbers(66);
            setPageNumber(66);
          }}
        >
          Last
        </button>
      </div>
      <div className="page-count">
        Page {pageNumbers} of {totalPages} | Total : {data?.total_count}
      </div>
    </div>
  );
};

export default Paginations;
