/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const NavBar = ({ location: { pathname } }) => {
  if (pathname.startsWith("/dash")) return null;
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      style={{ backgroundColor: "#303F9F" }}
    >
      <Navbar.Brand>
        <Link to="/" className="text-light" style={{ textDecoration: "none" }}>
          QuizEra
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle />

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto" />

        <Nav className="mx-3 my-2 text-center">
          <Link to="/dashboard" className="text-white ">
            Dashboard
          </Link>
        </Nav>
        <Nav className="mx-3 my-2 text-center">
          <Link to="/register" className="text-white">
            Logout
          </Link>
        </Nav>

        <Nav className="mx-3 my-2 text-center">
          <Link to="/register" className="text-white">
            Register
          </Link>
        </Nav>
        <Nav className="mx-3 my-2 text-center">
          <Link to="/login" className="text-white">
            Login
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
