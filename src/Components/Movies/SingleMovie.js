import React, { Fragment } from "react";
import "./SingleMovie.css";
import * as IoIcons from "react-icons/io";

const SingleMovie = () => {
  return (
    <Fragment>
      <div className="movie-container">
        <div className="image-container">
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/71niXI3lxlL._AC_SY741_.jpg"
            alt="Movie Poster"
          />
        </div>
        <div className="movie-desc">
          <div className="upper-part">
            <h5 className="name">Avengers: Endgmae</h5>
            <span className="rating">8.8</span>
          </div>
          <div className="lower-part">
            <button className="btn btn-outline-success">
              Add to watchlist{" "}
              <span>
                <IoIcons.IoMdAdd />
              </span>
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SingleMovie;
