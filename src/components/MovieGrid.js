import React from "react";
import MovieItem from "./MovieItem";

// Movie Grid component - Movie Item is imported in and mapped through to create the MovieItem component
const MovieGrid = (props) => {
  return (
    <section className="movie-grid">
      {props.movieItem.map((item) => (
        <MovieItem key={item.id} movieItem={item} />
      ))}
    </section>
  );
};

export default MovieGrid;
