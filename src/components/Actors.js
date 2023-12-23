import React from "react";
import { actors } from "../data";
import ActorsCard from "./ActorsCard";

function Actors() {
  const newActor=actors.map(actor=><ActorsCard key={actor.name} name={actor.name} movies={actor.movies}/>)
  return <>
    <h1>Actors Page</h1>
    {newActor}
  </>;
}

export default Actors;
