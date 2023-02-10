import React from "react";
import logo from "./logo.svg";
import { FaTimes } from "react-icons/fa";
import { social, links } from "./data";
import { useAppContext } from "./context";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useAppContext();
  return (
    <aside className={`${isSidebarOpen ? "show-sidebar sidebar " : "sidebar"}`}>
      <div className="sidebar-header">
        <img src={logo} className="logo" alt="naveen" />
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id}>
              <a href={url}>
                {icon} {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="social-icon">
        {social.map((link) => {
          const { id, url, icon } = link;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
