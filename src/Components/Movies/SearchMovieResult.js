import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleMovie from "./SingleMovie";
import axios from "axios";
import "./Movies.css";
import { useAuth } from "../../Contexts/AuthContext";
import { db } from "../../firebase";
import firebase from "firebase";
import CircularProgress from "@material-ui/core/CircularProgress";

const SearchMovieResult = (props) => {
  const { id } = useParams();

  const uri = `
  https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&language=en-US&page=1&include_adult=false&query=${id}`;

  const [movies, setMovies] = useState([]);

  const { currentUser } = useAuth();
  const [userMovies, setUserMovies] = useState(currentUser.movies);

  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        setMovies(res.data.results);
        console.log(res.data.results);
      })
      .catch((err) => console.log(err.message));
  }, [id]);

  const addMovieToWatchlist = async (movie) => {
    // console.log(movie);
    try {
      await db
        .collection("users")
        .doc(currentUser.uid)
        .update({
          movies: firebase.firestore.FieldValue.arrayUnion(movie),
        });
      setUserMovies(currentUser.movies);
    } catch (err) {
      console.log(err);
    }
  };

  const findMovie = (movie) => {
    var found = false;
    for (var i = 0; i < userMovies.length; i++) {
      if (userMovies[i].id === movie.id) {
        found = true;
        break;
      }
    }

    return found;
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
                    isAdded={findMovie(movie)}
                    handleButton={addMovieToWatchlist}
                  />
                </div>
              ))
            ) : (
              <div className="spinner">
                <CircularProgress color="secondary" />
              </div>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SearchMovieResult;
