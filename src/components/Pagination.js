import React from "react";
import "../styles/Pagination.css";

const Pagination = ({ page, setPage, total_pages }) => {
  let separator = "/";
  if (total_pages === undefined || total_pages === "") {
    total_pages = "";
    separator = "";
  }

  return (
    <div className="pagination">
      <button
        onClick={() => {
          if (page === 1) return;
          setPage(page - 1);
        }}
      >
        Prev
      </button>
      <span>{`${page} ${separator} ${total_pages}`}</span>
      <button
        onClick={() => {
          if (page === total_pages) return;
          setPage(page + 1);
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
