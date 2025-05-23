import React from "react";
import { useFavMovieContext } from "../contexts/FavMovieContext";

const MovieCard = ({ movie }) => {
  const { addToFav, removeFav, isFav } = useFavMovieContext();
  const fav = isFav(movie.id);

  function handleFavourite(e) {
    e.preventDefault();
    if (fav) removeFav(movie.id);
    else addToFav(movie);
  }
  return (
    <div className="relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 bg-indigo-900">
      {/* Add to favourites button */}
      <button
        className={`${
          fav ? "text-red-500" : "text-white"
        } absolute top-2 right-2 text-2xl z-10 transition-colors`}
        onClick={handleFavourite}
        aria-label="Add to favourites"
      >
        ❤︎
      </button>

      {/* Movie Poster */}
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-72 object-cover"
      />

      {/* Movie Information */}
      <div className="p-3 text-white text-center">
        <h3 className="text-lg font-semibold">
          {movie.title} ({new Date(movie.release_date).getFullYear()})
        </h3>
        <p className="text-sm text-yellow-400">TMDb: {movie.vote_average}</p>
      </div>
    </div>
  );
};

export default MovieCard;
