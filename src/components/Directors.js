import React from "react";
import { directors } from "../data";
import DirectorsCard from "./DirectorsCard";

const newDirectors = directors.map(director => <DirectorsCard director={director} key={director.name} name={director.name} movies={director.movies} />)
function Directors() {  
  return <>
    <h1>Directors Page</h1>
    {newDirectors}
  </>;
}

export default Directors;
