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
        <Link className="nav-link" to="search"> Search</Link>
      </div>
    </div>
  </div>
  </nav>
  )
}
