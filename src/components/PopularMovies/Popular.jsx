import React, { useContext, useState, useEffect } from "react";
import AllMovieContext from "../../Contexts/AllMovieContext";
import Card from "../Card/Card";

function Popular() {
  const { popularMovie, setPopularPage } = useContext(AllMovieContext);
  const [currentPage, setCurrentPage] = useState(1);

  const resultsMovie = popularMovie;
  const maxPages = 500; 

  useEffect(() => {
    setPopularPage(currentPage);
  }, [currentPage, setPopularPage]); 

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < maxPages) {
      setCurrentPage(prev => prev + 1);
    }
  };

  return (
    <>
      <div className="container mx-auto text-center px-32 bg-gray-900">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {resultsMovie.map((movie) => (
            <div className="w-full p-4" key={movie.id}>
              <Card data={movie} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center py-9  space-x-4 bg-gray-900">
        <button
          onClick={handlePrev}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg disabled:bg-gray-500"
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <span className="text-white font-semibold">
          Page : {currentPage}
        </span>
        <button
          onClick={handleNext}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg disabled:bg-gray-500"
          disabled={currentPage === maxPages}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default Popular;
