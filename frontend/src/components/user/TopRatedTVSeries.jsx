import React, { useState, useEffect } from "react";

import { getTopRatedMovies } from "../../api/movie";
import { useNotification } from "../../hooks";
import MovieList from "./MovieList";

export default function TopRatedTVSeries() {
  const [movies, setMovies] = useState([]);
  const { updateNotification } = useNotification();

  const fetchMovies = async () => {
    const { error, movies } = await getTopRatedMovies("TV Series");
    if (error) return updateNotification("error", error);

    setMovies([...movies]);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return <MovieList movies={movies} title="Viewers choice (TV Series)" />;
}
