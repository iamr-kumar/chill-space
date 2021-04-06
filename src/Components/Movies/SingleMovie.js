import React, { Fragment, useState } from "react";
import "./SingleMovie.css";
import * as IoIcons from "react-icons/io";
import * as FiIcons from "react-icons/fi";

const SingleMovie = ({ movie, handleButton, isAdded }) => {
  const [added, setAdded] = useState(isAdded);

  const handleClick = () => {
    setAdded(!added);
    handleButton(movie);
  };

  return (
    <Fragment>
      <div className="movie-container">
        <div className="image-container">
          <div className="overview">
            <h5>Overview</h5>
            <p>{movie.overview}</p>
          </div>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt="Movie Poster"
            />
          </div>
        </div>
        <div className="movie-desc">
          <div className="upper-part">
            <h5 className="name">{movie.title ? movie.title : movie.name}</h5>
            <span className="rating">{movie.vote_average}</span>
          </div>
          <div className="lower-part">
            <button
              className={
                "btn " + (added ? " is-added " : "btn-outline-success")
              }
              onClick={handleClick}
            >
              {!added ? (
                <span>
                  Add to watchlist
                  <IoIcons.IoMdAdd />
                </span>
              ) : (
                <span>
                  Remove from watchlist <FiIcons.FiMinusCircle />{" "}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SingleMovie;
