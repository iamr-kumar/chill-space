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
            src="https://images.unsplash.com/photo-1611769864329-ef8d67d6cf78?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8dG93SlpGc2twR2d8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
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
