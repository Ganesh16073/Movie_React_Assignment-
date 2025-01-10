import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';

function Search({ searchkey }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (searchkey) {
      const APIKEY = 'c45a857c193f6302f2b5061c3b85e743';

      const fetchMovies = async () => {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&language=en-US&query=${searchkey}`
        );
        const data = await response.json();
        setMovies(data.results);
      };

      fetchMovies();
    }
  }, [searchkey]);

  return (
    <div className="container mx-auto text-center px-32 bg-gray-900 py-8">
      {movies.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies.map((movie) => (
            <div className="w-full p-4" key={movie.id}>
              <Card data={movie} />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-white font-semibold mt-4">No movies found</p>
      )}
    </div>
  );
}

export default Search;
