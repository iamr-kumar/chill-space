import React, { Fragment, useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link, Redirect } from "react-router-dom";
import Sidebar from "./Sidebar";
import NavLinks from "./NavLinks";
import "./Navbar.css";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const [searchVal, setSearchVal] = useState("");

  const toggleSidebar = () => setSidebar(!sidebar);

  const handleSubmit = (e) => {
    // console.log(searchVal);
    e.preventDefault();
    return <Redirect exact to={`movies/search/${searchVal}`} />;
  };

  return (
    <Fragment>
      <Sidebar isActive={sidebar} toggleSidebar={toggleSidebar} />
      <nav className="navbar">
        <div className="left-section">
          <Link to="#" className="menu-bars" onClick={toggleSidebar}>
            <FaIcons.FaBars />
          </Link>
          {/* <a href="#" className="navbar-brand">
            Logo
          </a> */}
        </div>
        <div className="middle-section">
          <form className="form-inline" onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-control search-input"
              placeholder="Search Movie"
              name="searchVal"
              onChange={(e) => setSearchVal(e.target.value)}
              value={searchVal}
            />
            <button className="btn search">
              <AiIcons.AiOutlineSearch />
            </button>
          </form>
        </div>
        <div className="right-section">
          <Link to="#" className="nav-link">
            Login
          </Link>
          <Link to="#" className="nav-link btn signup">
            Signup
          </Link>
        </div>
      </nav>
      <div className="nav-links">
        <NavLinks />
      </div>
    </Fragment>
  );
};

export default Navbar;
