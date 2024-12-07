const Pagination = ({ page, onPageChange }) => {
  return (
    //Go to previous or next page
    <div className="pagination">
      <button
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
      >
        Previous
      </button>
      <span>Page {page}</span>
      <button onClick={() => onPageChange(page + 1)}>Next</button>
    </div>
  );
};

export default Pagination;
