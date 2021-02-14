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
import Homepage from "./Components/Layout/Homepage";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <div>
            <Navbar />
            <Route exact path="/movies/top" component={Movies} />
            <Route exact path="/movies/my-movies" component={MyMovies} />
            <Route
              exact
              path="/movies/search/:id"
              component={SearchMovieResult}
            />
          </div>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
