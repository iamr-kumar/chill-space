import React, { Fragment, useEffect, useState } from "react";
import SingleMovie from "./SingleMovie";
import axios from "axios";
import firebase from "firebase";
import { db } from "./../../firebase";
import { useAuth } from "./../../Contexts/AuthContext";
import "./Movies.css";

const Movies = () => {
  const uri = `
  https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}`;
  const [movies, setMovies] = useState([]);

  const { currentUser } = useAuth();

  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        setMovies(res.data.results);
        // console.log(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  const addMovieToWatchlist = async (movie) => {
    // console.log(movie);
    try {
      await db
        .collection("users")
        .doc(currentUser.uid)
        .update({
          movies: firebase.firestore.FieldValue.arrayUnion(movie),
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
            {movies.length > 0 &&
              movies.map((movie, index) => (
                <div className="col-lg-3 col-md-4 col-sm-6 movies-container">
                  <SingleMovie
                    movie={movie}
                    key={index}
                    handleButton={addMovieToWatchlist}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Movies;
