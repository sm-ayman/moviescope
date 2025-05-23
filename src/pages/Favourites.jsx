import React from "react";
import { useFavMovieContext } from "../contexts/FavMovieContext";
import MovieCard from "../components/MovieCard";

const Favourites = () => {
  const { fav } = useFavMovieContext();

  if (fav) {
    return (
      <div className="mx-3">
        <h1 className="text-2xl pt-20 font-mono pb-10 text-center">
          Favourite Movies
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {fav.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div>
      <p>No movies added</p>
    </div>
  );
};

export default Favourites;
