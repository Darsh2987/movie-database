import React from "react";

// Movie poster/image path
const IMGPATH = "https://image.tmdb.org/t/p/w1280";

// Function and conditional statment to apply a different class name depending on the vote average score
const setVoteClass = (vote) => {
  if (vote >= 8) {
    return "movie-item-card-vote-green";
  } else if (vote >= 5) {
    return "movie-item-card-vote-orange";
  } else {
    return "movie-item-card-vote-red";
  }
};

// Movie Item component
const MovieItem = (props) => {
  return (
    <div className="movie-item-card">
      <img className="movie-item-card-poster" src={IMGPATH + props.movieItem.poster_path} alt={props.movieItem.title} />
      <div className="movie-item-card-info">
        <h3 className="movie-item-card-title">{props.movieItem.title}</h3>
        <span className={`movie-item-card-vote ${setVoteClass(props.movieItem.vote_average)}`}>{props.movieItem.vote_average}</span>
      </div>

      <div className="movie-item-card-overview">
        <h2>Overview:</h2>
        <p>{props.movieItem.overview}</p>
      </div>
    </div>
  );
};

export default MovieItem;
