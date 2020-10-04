import React from "react";

const IMGPATH = "https://image.tmdb.org/t/p/w1280";

const MovieItem = (props) => {
  return (
    <div className="movie-item-card">
      <img className="movie-item-card-poster" src={IMGPATH + props.movieItem.poster_path} alt={props.movieItem.title} />
      <div className="movie-item-card-info">
        <h3 className="movie-item-card-title">{props.movieItem.title}</h3>
        <span className="movie-item-card-vote">{props.movieItem.vote_average}</span>
      </div>

      <div className="movie-item-card-overview">
        <h2>Overview:</h2>
        <p>{props.movieItem.overview}</p>
      </div>
    </div>
  );
};

export default MovieItem;
