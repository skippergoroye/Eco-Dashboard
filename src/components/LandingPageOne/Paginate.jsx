import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';


export default function Paginate({ postsPerPage, totalPosts, paginate }) {
  const [currentPage, setCurrentPage] = useState(1);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      paginate(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < pageNumbers.length) {
      setCurrentPage(currentPage + 1);
      paginate(currentPage + 1);
    }
  };

  return (
    <nav>
      <ul className="pagination flex gap-2 border">
        <li className={`page-item flex border p-2 ${currentPage === 1 ? 'opacity-50' : ''}`}>
          <button 
            onClick={handlePrevious} 
            className="page-link flex" 
            disabled={currentPage === 1}
          >
            <ChevronLeft />
          </button>
        </li>
        {pageNumbers.map(number => (
          <li key={number} className="page-item flex border p-2">
            <a
              onClick={() => {
                setCurrentPage(number);
                paginate(number);
              }}
              href="#!"
              className={`page-link p-1 flex ${currentPage === number ? 'bg-green-500 text-white' : ''}`}
            >
              {number}
            </a>
          </li>
        ))}
        <li className={`page-item flex border p-2 ${currentPage === pageNumbers.length ? 'opacity-50' : ''}`}>
          <button 
            onClick={handleNext} 
            className="page-link flex" 
            disabled={currentPage === pageNumbers.length}
          >
            <ChevronRight />
          </button>
        </li>
      </ul>
    </nav>
  );
}
