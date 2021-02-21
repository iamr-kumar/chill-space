import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthProvider from "./Contexts/AuthContext";
import Navbar from "./Components/Layout/Navbar";
import Movies from "./Components/Movies/Movies";
import MyMovies from "./Components/Movies/MyMovies";
import SearchMovieResult from "./Components/Movies/SearchMovieResult";
import Homepage from "./Components/Layout/Homepage";
import ProtectedRoute from "./ProtectedRoute";

const App = () => {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/login" component={Homepage} />
            <Route exact path="/signup" component={Homepage} />
            <div>
              <Navbar />
              <ProtectedRoute exact path="/movies/top" component={Movies} />
              <ProtectedRoute
                exact
                path="/movies/my-movies"
                component={MyMovies}
              />
              <ProtectedRoute
                exact
                path="/movies/search/:id"
                component={SearchMovieResult}
              />
            </div>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
};

export default App;
