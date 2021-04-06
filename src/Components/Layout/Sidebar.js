import React, { Fragment } from "react";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import { useAuth } from "./../../Contexts/AuthContext";
import "./Sidebar.css";

const Sidebar = ({ isActive, toggleSidebar }) => {
  const { currentUser } = useAuth();
  return (
    <Fragment>
      <nav className={isActive ? "sidebar active" : "sidebar"}>
        <ul className="nav-menu">
          <li className="nav-toggle">
            <Link to="#" onClick={() => toggleSidebar()}>
              <AiIcons.AiOutlineClose className="menu-bars" />
            </Link>
          </li>
          {Sidebar}
        </ul>
        <div className="user-info">
          <img
            src={
              currentUser && currentUser.picture
                ? currentUser.picture
                : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
            }
            alt=""
            className="user-image"
          />
          <h2 className="user-name">{currentUser ? currentUser.name : ""}</h2>
        </div>
        <ul className="nav-menu">
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to="#">
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </Fragment>
  );
};

export default Sidebar;
