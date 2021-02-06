import React, { Fragment } from "react";
import SingleMovie from "./SingleMovie";
import "./Movies.css";

const Movies = () => {
  return (
    <Fragment>
      <div className="movies">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6">
              <SingleMovie />
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <SingleMovie />
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <SingleMovie />
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <SingleMovie />
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <SingleMovie />
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <SingleMovie />
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <SingleMovie />
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <SingleMovie />
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <SingleMovie />
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <SingleMovie />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Movies;
