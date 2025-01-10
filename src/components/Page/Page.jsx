import React, { useState } from 'react';

function Page() {
  const [currentPage, setCurrentPage] = useState(1);

  const handleNext = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };
  const handlePrev = () => {
    setCurrentPage(prevPage => (prevPage > 1 ? prevPage - 1 : 1));
  };

  return (
    <>
      <button onClick={handlePrev} disabled={currentPage === 1}>
        Prev
      </button>
      <button disabled>
        {currentPage}
      </button>
      <button onClick={handleNext}>
        Next
      </button>
    </>
  );
}

export default Page;
