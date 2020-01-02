import React from "react";
import { Link } from "react-router-dom";
// import styles from "./DashboardRoutes.module.css";

const NavBar = () => {
  return (
    <ul>
      <li>
        <Link to="/dash">Dashboard</Link>
      </li>
      <li>
        <Link to="/dash/profile">Profile</Link>
      </li>
      <li>
        <Link to="/dash/newtests">New Tests</Link>
      </li>
    </ul>
  );
};

export default NavBar;
