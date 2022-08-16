/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import "./Header.css";
import logo from './Logo.png';
import 'bootstrap/dist/js/bootstrap.js';
import { Link } from'react-router-dom';


export default function Header() {

  return (
 <nav className="navbar navbar-expand-md navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="nav-link" to="/">
        <img src={logo} width="120" height="60" className="d-inline-block align-top" alt=""/>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav header">
        <Link className="nav-link" to="/"> Library</Link>
        <Link className="nav-link" to="top-songs"> Top Songs</Link>
        <Link className="nav-link" to="top-artists"> Top Artists</Link>
        <Link className="nav-link" to="recommend"> Recommend</Link>
      </div>
    </div>
    <form className="d-flex">
      <input className="form-control me-2 center-form" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn search-pink" type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg></button>
    </form>
  </div>
  </nav>
  )
}
