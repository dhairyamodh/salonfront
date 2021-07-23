import React from 'react'
import Paginate from 'rc-pagination';
import "rc-pagination/assets/index.css";
function Pagination({ total, updatePage, countPerPage, currentPage }) {
    return (
        <Paginate
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 50 }}
            pageSize={countPerPage}
            onChange={updatePage}
            current={currentPage}
            total={total}
        />
    )
}

export default Pagination
