import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Login from "./../Auth/Login";
import Signup from "./../Auth/Signup";
import "./Homepage.css";

const Homepage = () => {
  const [rightComponent, setRightComponent] = useState({
    login: false,
    signup: false,
  });
  const path = useLocation().pathname;
  const { login, signup } = rightComponent;

  useEffect(() => {
    if (path === "/login") {
      setRightComponent({ signup: false, login: true });
    }
    if (path === "/signup") {
      setRightComponent({ login: false, signup: true });
    }
  }, [path]);

  return (
    <div className="Homepage">
      <div className="row">
        <div className="col-md-7 right-part">
          <img src="https://cdn.hipwallpaper.com/i/98/21/dUyCkp.jpg" alt="" />
        </div>
        <div className="col-md-5 left-part">
          {login ? (
            <Login />
          ) : signup ? (
            <Signup />
          ) : (
            <div className="container">
              <h2 className="title">
                BINGE <span>LIST</span>
              </h2>
              <p>
                Watch. <span>Read.</span> Play.
              </p>
              <div className="auth-buttons">
                <Link to="/login" className="btn">
                  Login
                </Link>
                <Link to="/signup" className="signup">
                  Signup
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
