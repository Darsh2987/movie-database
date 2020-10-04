import React from "react";
import MovieItem from "./MovieItem";

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
