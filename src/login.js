import React from "react";
import "./Login.css";

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
const redirectUri = "http://localhost:3000";
const state = generateRandomString(16);
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-read-private",
  "user-top-read",
  "user-modify-playback-state",
  "user-library-read",
  "playlist-modify-public"
];

const accessUrl = `${auth_endpoint}?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&state=${state}&scope=${scopes.join(
  "%20")}`;




function Login() {
  return (
    <div className="login">
      <img
        src="https://i.imgur.com/LFIighh.png"
        alt=""
      />

      <a href={accessUrl}>Login to Spotify</a>
    </div>
  );
}

export default Login;