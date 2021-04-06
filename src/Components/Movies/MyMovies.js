import React, { Fragment } from "react";
import SingleMovie from "./SingleMovie";
import firebase from "firebase";
import { db } from "./../../firebase";
import { useAuth } from "./../../Contexts/AuthContext";
import "./Movies.css";

const MyMovies = () => {
  const { currentUser } = useAuth();
  const { movies } = currentUser;

  const removeMovieFromWatchlist = async (movie) => {
    // console.log(movie);
    try {
      await db
        .collection("users")
        .doc(currentUser.uid)
        .update({
          movies: firebase.firestore.FieldValue.arrayRemove(movie),
        });
      console.log("Movie added!");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Fragment>
      <div className="movies">
        <div className="container">
          <div className="row">
            {movies.length > 0 ? (
              movies.map((movie, index) => (
                <div className="col-lg-3 col-md-4 col-sm-6 movies-container">
                  <SingleMovie
                    movie={movie}
                    key={index}
                    isAdded={true}
                    handleButton={removeMovieFromWatchlist}
                  />
                </div>
              ))
            ) : (
              <div className="not-found">
                <h2>No movies in your watchlist!</h2>
                <h4>Add some to get started!</h4>
              </div>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MyMovies;
