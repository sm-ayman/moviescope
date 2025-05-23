import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { searchMovies, getPopularMovies } from "../data/api";
const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);


  // loading the movies for once
  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError("Oops! Failed Searching Movies...");
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (loading) return;

    setLoading(true);
    try {
      const searchResults = await searchMovies(searchQuery);
      setMovies(searchResults);
      setError(null);
    } catch (err) {
      console.log(err);
      setError("Ops! failed to search. try again...");
    } finally {
      setLoading(false);
    }

    // setSearchQuery("");
  };

  return (
    <div className="mx-3">
      <h1 className="text-2xl font-mono pt-20 text-center">Trending Movies</h1>
      <form
        onSubmit={handleSearch}
        className="flex justify-center flex-col sm:flex-row items-center gap-4 py-5"
      >
        <input
          type="text"
          placeholder="Search movie here..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full sm:w-96 px-4 py-2 rounded-md placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-yellow-500 text-black font-semibold rounded-md hover:bg-yellow-600 transition duration-200"
        >
          Search
        </button>
      </form>

      {/* error message */}
      {error && <div className="text-red-700">{error}</div>}

      {/* loding the movies */}
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
