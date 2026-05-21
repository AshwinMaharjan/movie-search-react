import React from "react";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";
import "../css/Favorites.css";

const Favorites = () => {
  const { favorites } = useMovieContext();

  if (favorites) {
    return (
      <div className="favorites">
        <h2>Your Favorites</h2>

      <div className="movies-grid">
        {favorites.map((movie) => (
          // movie.title.toLowerCase().startsWith(searchQuery) &&
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
      </div>
    );
  }
  return (
    <>
      <div className="favorites-empty">
        <h2>No Favorite Movies Yet</h2>
        <p>Start adding your favorite movies and they will appear her</p>
      </div>
    </>
  );
};

export default Favorites;
