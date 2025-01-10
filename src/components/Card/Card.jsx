import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Card = ({ data }) => {
  const { title, vote_average, poster_path, id } = data;
  const imageUrl = poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : '/path/to/fallback-image.jpg';

  return (
    <div className="bg-gray-800 text-white rounded-lg mt-7 shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
      <Link to={`/movie/${id}`} state={{ movie: data }}>

        <img
          src={imageUrl}
          alt={title}
          className="w-full h-56 sm:h-64 md:h-72 lg:h-80 object-cover"
        />
        
        <div className="p-4">
          <h5 className="text-lg font-semibold truncate">{title}</h5>

          <p className="text-sm text-gray-400 mt-2">Rating: {vote_average}</p>
        </div>
      </Link>
    </div>
  );
};

Card.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    poster_path: PropTypes.string,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default Card;
