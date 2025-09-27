// src/components/Navigation.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/style.css";

function Navigation() {
  return (
    <header className="navigation">
      <h1 className="navigation__title">Notes App</h1>

      <nav className="navigation__links">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/archives"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Arsip
        </NavLink>
      </nav>
    </header>
  );
}

export default Navigation;
