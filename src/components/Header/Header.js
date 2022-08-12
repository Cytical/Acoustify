import React from 'react'
import "./Header.css";

export default function Header() {
  return (
    <header>
        <nav class="navbar navbar-light ">
            <a href="#default" class="logo">CompanyLogo</a>
            <div class="header-right">
                <a class="active" href="#home">Home</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
            </div>
        </nav>
    </header>
  )
}
