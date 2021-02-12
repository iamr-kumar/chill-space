import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import config from "./../../config";
import SingleMovie from "./SingleMovie";
import axios from "axios";
import "./Movies.css";

const Movies = () => {
  const { id } = useParams();

  const uri = `
  https://api.themoviedb.org/3/search/movie?api_key=${config.movieDbAPI}=en-US&page=1&include_adult=false&query=${id}`;

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    console.log(id);
    axios
      .get(uri)
      .then((res) => {
        setMovies(res.data.results);
        console.log(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Fragment>
      <div className="movies">
        <div className="container">
          <div className="row">
            {movies.length > 0 &&
              movies.map((movie, index) => (
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <SingleMovie movie={movie} key={index} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Movies;
