import { createContext, useContext, useEffect, useState } from "react";

const FavMovieContext = createContext();

export const useFavMovieContext = () => useContext(FavMovieContext);

export const MovieProvider = ({ children }) => {
  const [fav, setFav] = useState([]);

  // local storage
  useEffect(() => {
    const storedFav = localStorage.getItem("favourites");
    if (storedFav) setFav(JSON.parse(storedFav));
  }, []);

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(fav));
  }, [fav]);

  const addToFav = (movie) => {
    setFav((prev) => [...prev, movie]);
  };

  const removeFav = (id) => {
    setFav((prev) => prev.filter((movie) => movie.id !== id));
  };

  const isFav = (id) => {
    return fav.some((movie) => movie.id === id);
  };

  const contextValue = {
    fav,
    addToFav,
    removeFav,
    isFav,
  };

  return (
    <FavMovieContext.Provider value={contextValue}>
      {children}
    </FavMovieContext.Provider>
  );
};
