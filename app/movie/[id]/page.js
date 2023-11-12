import { MovieContainer } from "@/containers/movie";
import Movies from "@/mocks/movies.json";
import { notFound } from "next/navigation";
import React from "react";
function MoviePage({ params }) {
  const movieDetail = Movies.results.find(
    (movie) => movie.id.toString() === params.id
  );
  if (!movieDetail) {
    return notFound();
  }
  return <MovieContainer movie={movieDetail}></MovieContainer>;
}
export default MoviePage;
