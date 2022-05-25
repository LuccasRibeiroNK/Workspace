import React from "react";
const Pagination = ({ page, perPage, total, onPageChange, onPerPageChange }) => {
    const pages = Math.ceil(total / perPage);
    const pageButtons = [];
    for (let i = 0; i < pages; i++) {
        pageButtons.push(
            <button key={i} onClick={() => onPageChange(i)}>

                {i + 1}
            </button>
        );
    }
    return (
        <div>
            <button onClick={() => onPageChange(page - 1)}>Prev</button>
            {pageButtons}
            <button onClick={() => onPageChange(page + 1)}>Next</button>
            <select value={perPage} onChange={onPerPageChange}>

                <option value="9">9</option>
                <option value="18">18</option>
                <option value="27">27</option>
            </select>
        </div>
    );
};
export default Pagination;
 // - Use Pagination, with 9 items displayed Per_Page
