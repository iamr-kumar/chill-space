import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Navbar from "./Components/Layout/Navbar";
import { Fragment } from "react";
import Movies from "./Components/Movies/Movies";
import MyMovies from "./Components/Movies/MyMovies";

const App = () => {
  return (
    <Fragment className="App">
      <Router>
        <Navbar />
        <Switch>
          <Redirect exact from="/" to="/movies/top" />
          <Route exact path="/movies/top" component={Movies} />
          <Route exact path="/movies/my-movies" component={MyMovies} />
        </Switch>
      </Router>
    </Fragment>
  );
};

export default App;
