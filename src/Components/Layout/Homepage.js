import React from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";

const Homepage = () => {
  return (
    <div className="Homepage">
      <div className="row">
        <div className="col-md-7 right-part">
          <img src="https://cdn.hipwallpaper.com/i/98/21/dUyCkp.jpg" alt="" />
        </div>
        <div className="col-md-5 left-part">
          <div className="container">
            <h2 className="title">
              Chill <span>Space</span>
            </h2>
            <p>
              Watch. <span>Read.</span> Play.
            </p>
            <div className="auth-buttons">
              <Link to="#" className="btn">
                Login
              </Link>
              <Link to="#" className="signup">
                Signup
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
