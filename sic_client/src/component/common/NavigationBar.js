import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaUserGraduate, FaList, FaPlus, FaSearch } from "react-icons/fa";

const NavBar = ({ isAuthenticated }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
      <div className="container-fluid">
        <Link
          className="navbar-brand d-flex align-items-center fw-bold"
          to="/"
        >
          <FaUserGraduate className="me-2" />
          <span className="d-none d-md-inline">Student Dashboard</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink
                className="nav-link d-flex align-items-center"
                activeClassName="active"
                to="/view-students"
              >
                <FaList className="me-1" />
                <span className="d-none d-md-inline">View All Students</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link d-flex align-items-center"
                activeClassName="active"
                to="/add-students"
              >
                <FaPlus className="me-1" />
                <span className="d-none d-md-inline">Add New Student</span>
              </NavLink>
            </li>
            {isAuthenticated && (
              <li className="nav-item">
                <Link
                  className="nav-link d-flex align-items-center"
                  to="/logout"
                >
                  <FaUserGraduate className="me-1" />
                  <span className="d-none d-md-inline">Logout</span>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
