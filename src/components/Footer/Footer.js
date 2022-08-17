import React from 'react'
import { Link } from'react-router-dom';
import "./Footer.css"

export default function Footer() {
  return (
<footer class="bg-dark text-center text-white">
  <div class="container p-4">
      <section class="mb-4">
        <a class="btn btn-outline-light btn-floating m-1" href="https://github.com/Cytical/Acoustify" role="button">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
        </svg>
        </a>
        <a class="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/ezra-guiao/" role="button">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
        </svg>
        </a>
        <a class="btn btn-outline-light btn-floating m-1" href="https://cytical.github.io/" role="button">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-person-workspace" viewBox="0 0 16 16">
          <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H4Zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
          <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.373 5.373 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2H2Z"/>
        </svg>
        </a>
      </section>
    <section class="mb-4">
      <p>
        Acoustify is a project initially built to learn React.js (Frontend) and Node.js (Backend)
        It incorporates user autentication and recieves user data through Spotify's Web Api. 
        With the help of Michael Thelin's Spotify Web Api Node wrapper, endpoint requests are done 
        through builtin functions which only require a token provided by Spotify. Future development
        will include Web Playback SDK which will allow users to play songs in Spotify directly through
        this web app.
      </p>
    </section>
    <section class="">
      <div class="row">
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase">USER</h5>

          <ul class="list-unstyled mb-0">
            <li>
              <Link className="text-white" to="/"> Library</Link>
            </li>
            <li>
              <Link className="text-white" to="/recommend"> Recommendations</Link>
            </li>
          </ul>
        </div>
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase">Top Songs</h5>

          <ul class="list-unstyled mb-0">
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
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase">Top Artists</h5>

          <ul class="list-unstyled mb-0">
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
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase">Development</h5>

          <ul class="list-unstyled mb-0">
            <li>
              <a href="https://developer.spotify.com/documentation/" className="text-white">Spotify Docs</a>
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

  <div class="text-center p-3">
    © 2023 Copyright: Ezra Guiao
  </div>
</footer>
  )
}
