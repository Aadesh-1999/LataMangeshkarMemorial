import React from 'react';
import './styles/Navbar.css';
import {
  NavLink
} from "react-router-dom";
export const Navbar = () => {
  return (<div className='sticky-top'>
    <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid">
    <NavLink to="/" className="navbar-brand mx-4">Lata Mangeshkar</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item mx-4">
          <NavLink to="/" className="nav-link" aria-current="page">Home</NavLink>
        </li>
        <li className="nav-item mx-4">
          <NavLink to="/facts" className="nav-link">Facts</NavLink>
        </li>
        <li className="nav-item mx-4">
          <NavLink to="/about" className="nav-link">About</NavLink>
        </li>
        <li className="nav-item mx-4">
          <NavLink to="/songs" className="nav-link">Songs</NavLink>
        </li>
      </ul>
      {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>
  </div>);
};
