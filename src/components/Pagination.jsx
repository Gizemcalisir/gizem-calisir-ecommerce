import React, { useState } from "react";

export default function Pagination({ totalPages = 3 }) {
  const [currentPage, setCurrentPage] = useState(1);

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const onPageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  return (
    <div className="flex justify-center h-[74px] my-10 ">
      <div className="inline-flex border border-[#BDBDBD] rounded select-none">
        <button
          onClick={() => onPageChange(1)}
          disabled={currentPage === 1}
          className="px-4 py-2 border-r w-[83px] font-semibold border-[#BDBDBD] bg-[#F3F3F3] text-[#BDBDBD] disabled:opacity-50 hover:bg-gray-100"
        >
          First
        </button>

        {pages.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-4 py-2 border-r font-semibold border-gray-300
            ${
              page === currentPage
                ? "bg-blue-500 text-[white] font-bold"
                : "bg-[white] text-[#23A6F0]"
            }
          `}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 w-[83px] disabled:opacity-50 font-bold text-[#23A6F0]"
        >
          Next
        </button>
      </div>
    </div>
  );
}
