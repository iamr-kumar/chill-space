import React, { Fragment, useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link, withRouter } from "react-router-dom";
import Sidebar from "./Sidebar";
import NavLinks from "./NavLinks";
import { useAuth } from "./../../Contexts/AuthContext";
import "./Navbar.css";

const Navbar = ({ history }) => {
  const [sidebar, setSidebar] = useState(false);

  const [searchVal, setSearchVal] = useState("");

  const toggleSidebar = () => setSidebar(!sidebar);

  const { currentUser, logout } = useAuth();

  const handleSubmit = (e) => {
    // console.log(searchVal);
    e.preventDefault();
    const path = `/movies/search/${searchVal}`;
    // console.log(path);
    history.push(path);
    setSearchVal("");
  };

  const handleLogout = async () => {
    try {
      await logout();
      history.push("/login");
    } catch (err) {
      console.log(err);
    }
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
          <span>{currentUser ? currentUser.name : ""}</span>
          <button to="#" className="btn ml-3" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </nav>
      <div className="nav-links">
        <NavLinks />
      </div>
    </Fragment>
  );
};

export default withRouter(Navbar);
