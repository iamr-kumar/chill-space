import React from "react";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";

export const SidebarData = [
  {
    title: "Movies",
    path: "/home",
    icon: <MdIcons.MdLocalMovies />,
    cName: "nav-text",
  },
  {
    title: "Books",
    path: "/books",
    icon: <MdIcons.MdLibraryBooks />,
    cName: "nav-text",
  },
  {
    title: "Music",
    path: "/music",
    icon: <FaIcons.FaMusic />,
    cName: "nav-text",
  },
];
