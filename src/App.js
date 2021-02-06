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

const App = () => {
  return (
    <Fragment className="App">
      <Router>
        <Navbar />
        <Switch>
          <Redirect exact from="/" to="/movies" />
          <Route exact path="/movies" component={Movies} />
        </Switch>
      </Router>
    </Fragment>
  );
};

export default App;
