import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Navbar from "./Components/Layout/Navbar";
import Movies from "./Components/Movies/Movies";
import MyMovies from "./Components/Movies/MyMovies";
import SearchMovieResult from "./Components/Movies/SearchMovieResult";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Redirect exact from="/" to="/movies/top" />
          <Route exact path="/movies/top" component={Movies} />
          <Route exact path="/movies/my-movies" component={MyMovies} />
          <Route
            exact
            path="/movies/search/:id"
            component={SearchMovieResult}
          />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
