import React, { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavLinks.css";

const NavLinks = () => {
  const path = useLocation().pathname;
  return (
    <Fragment>
      <div className="NavLinks">
        <div className="link-container">
          <div className={`link ${path.includes("top") && "active"}`}>
            <Link to="/movies/top">Trending</Link>
          </div>
          <div className={`link ${path.includes("my") && "active"}`}>
            <Link to="/movies/my-movies">My Watchlist</Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default NavLinks;
