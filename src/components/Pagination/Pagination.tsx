import React from "react";

const Pagination = ({ nPages, currentPage, setCurrentPage }: any) => {
    const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

    const nextPage = () => {
        if (currentPage !== nPages) setCurrentPage(currentPage + 1);
    };
    const prevPage = () => {
        if (currentPage !== 1) setCurrentPage(currentPage - 1);
    };

    return (
        <nav className="mt-4">
            <ul className="pagination justify-content-center">
                <li className="page-item">
                    <a onClick={prevPage} href="#" className="page-link">
                        Previous
                    </a>
                </li>
                {pageNumbers.map((pgNumber) => (
                    <li key={pgNumber}>
                        <a
                            href="#"
                            onClick={() => setCurrentPage(pgNumber)}
                            className="page-link"
                        >
                            {pgNumber}
                        </a>
                    </li>
                ))}
                <li className="page-item">
                    <a href="#" className="page-link" onClick={nextPage}>
                        Next
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
