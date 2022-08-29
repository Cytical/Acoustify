import React from "react";
import Logo from "./Logo.png"
import "./Login.css";

//security
const generateRandomString = function(length) {
  var text = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

const auth_endpoint = "https://accounts.spotify.com/authorize";

const clientId = "ae3f94d228c64ca69dfb58b533b679ef";
const redirectUri = "https://acoustify.onrender.com/";
const state = generateRandomString(16);
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-read-private",
  "user-top-read",
  "user-modify-playback-state",
  "user-library-read",
  "playlist-modify-public",
  "playlist-read-private"
];

const accessUrl = `${auth_endpoint}?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&state=${state}&scope=${scopes.join(
  "%20")}`;

function Login() {
  return (
    <div className="login-page">
      <div className="login">
        <img
          src={Logo}
          alt="Acoustify by Ezra Guiao"
        />

        <a className= "loginButton" href={accessUrl}>Login to Spotify</a>
      </div>
    </div>
  );
}

export default Login;