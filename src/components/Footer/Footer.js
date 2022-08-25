import React from 'react'
import { Link } from'react-router-dom';
import "./Footer.css"

export default function Footer() {
  return (
<footer className="bg-dark text-center text-white">
  <div className="container p-4">
      <section className="mb-4">
        <a className="btn btn-outline-light btn-floating m-1" href="https://github.com/Cytical/Acoustify" role="button">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
        </svg>
        </a>
        <a className="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/ezra-guiao/" role="button">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
        </svg>
        </a>
        <a className="btn btn-outline-light btn-floating m-1" href="https://cytical.github.io/" role="button">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-globe" viewBox="0 0 16 16">
          <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"/>
        </svg>
        </a>
      </section>
    <section className="mb-4">
      <p>
        Acoustify is a project initially built to learn React.js (Frontend) and Node.js (Backend)
        It incorporates user authentication and recieves user data through Spotify's Web API. 
      
      </p>
    </section>
    <section className="">
      <div className="row">
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase">USER</h5>

          <ul className="list-unstyled mb-0">
            <li>
              <Link className="text-white" to="/"> Library</Link>
            </li>
            <li>
              <Link className="text-white" to="/search"> Search</Link>
            </li>
          </ul>
        </div>
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase">Top Songs</h5>

          <ul className="list-unstyled mb-0">
            <li>
              <Link className="text-white" to= "/top-songs/short-term"> Last Month</Link>
            </li>
            <li>
              <Link className="text-white" to= "/top-songs/medium-term"> Last 6 Months</Link>
            </li>
            <li>
              <Link className="text-white" to= "/top-songs/long-term"> Last Year</Link>
            </li>
          </ul>
        </div>
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase">Top Artists</h5>

          <ul className="list-unstyled mb-0">
            <li>
              <Link className="text-white" to= "/top-artists/short-term"> Last Month</Link>
            </li>
            <li>
              <Link className="text-white" to= "/top-artists/medium-term"> Last 6 Months</Link>
            </li>
            <li>
              <Link className="text-white" to= "/top-artists/long-term"> Last Year</Link>
            </li>
          </ul>
        </div>
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase">Development</h5>

          <ul className="list-unstyled mb-0">
            <li>
              <a href="https://developer.spotify.com/documentation/web-api/reference/#/" className="text-white">Spotify Docs</a>
            </li>
            <li>
              <a href="https://github.com/thelinmichael/spotify-web-api-node" className="text-white">Web Api Node</a>
            </li>
            <li>
              <a href="https://developer.spotify.com/documentation/web-playback-sdk/quick-start/" className="text-white">User Auth</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>

  <div className="text-center p-3">
    © 2023 Copyright: Ezra Guiao
  </div>
</footer>
  )
}
