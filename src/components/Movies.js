import React from "react";
import { movies } from "../data";
import MovieCard from "./MovieCard";

const newMovie=movies.map(movie=><MovieCard movie={movie} key={movie.title} title={movie.title} time={movie.time} genres={movie.genres}/>)
function Movies() {
  return <>
    <h1>Movies Page</h1>
    {newMovie}
  </>  
}

export default Movies;
