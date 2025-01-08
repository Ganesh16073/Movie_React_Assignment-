import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function MovieDetail() {
  const location = useLocation();
  const movie = location.state?.movie; 

  const [cast, setCast] = useState([]);

  if (!movie) {
    return <div>Movie details not found.</div>; 
  }

  const {
    id,
    title,
    overview,
    release_date,
    vote_average,
    poster_path,
    backdrop_path,
    genres,
    popularity,
    original_language,
    original_title,
  } = movie;

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/credits?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`
        );
        const data = await response.json();
        setCast(data.cast || []);
      } catch (error) {
        console.error("Error fetching cast data:", error);
      }
    };

    fetchCast();
  }, [id]);

  return (
    <div className="movie-detail bg-gray-900 text-white p-6">

      {backdrop_path && (
        <div
          className="backdrop"
          style={{
            backgroundImage: `url('https://image.tmdb.org/t/p/w1280${backdrop_path}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "300px",
          }}
        ></div>
      )}
      <div className="flex items-center justify-center mt-6">
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
          className="rounded-lg shadow-xl w-72"
        />
      </div>
      <h1 className="text-4xl font-semibold mt-6">{title}</h1>

      {original_title && (
        <p className="text-xl text-gray-400">Original Title: {original_title}</p>
      )}

      {release_date && (
        <p className="text-lg text-gray-300">Release Date: {release_date}</p>
      )}

      <p className="text-lg mt-4">{overview}</p>

      <p className="text-lg mt-2">Rating: {vote_average}</p>

      {genres && genres.length > 0 && (
        <div className="mt-4">
          <h3 className="font-semibold">Genres:</h3>
          <ul className="flex flex-wrap">
            {genres.map((genre) => (
              <li key={genre.id} className="mr-4 mb-2 text-gray-400">
                {genre.name}
              </li>
            ))}
          </ul>
        </div>
      )}

      <p className="mt-4 text-gray-400">Popularity: {popularity}</p>

      <p className="mt-2 text-gray-400">Original Language: {original_language}</p>

      <div className="cast-section mt-8">
        <h2 className="text-2xl font-semibold mb-4">Cast</h2>
        {cast.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {cast.slice(0, 12).map((actor) => (
              <div key={actor.id} className="cast-item text-center">
                <img
                  src={
                    actor.profile_path
                      ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                      : "https://via.placeholder.com/500x750?text=No+Image"
                  }
                  alt={actor.name}
                  className="rounded-lg shadow-md w-full h-48 object-cover"
                />
                <h3 className="text-lg mt-2">{actor.name}</h3>
                <p className="text-gray-400">as {actor.character}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No cast information available.</p>
        )}
      </div>
    </div>
  );
}

export default MovieDetail;
