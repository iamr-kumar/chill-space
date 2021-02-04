import React, { Fragment, useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import "./Navbar.css";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => setSidebar(!sidebar);

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
          <form className="form-inline">
            <input
              type="text"
              className="form-control search-input"
              placeholder="Search Movie"
            />
            <button className="btn search" type="submit">
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
    </Fragment>
  );
};

export default Navbar;
