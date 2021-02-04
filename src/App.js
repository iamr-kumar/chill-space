import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Layout/Navbar";
import { Fragment } from "react";

const App = () => {
  return (
    <Fragment className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" />
        </Switch>
      </Router>
    </Fragment>
  );
};

export default App;
