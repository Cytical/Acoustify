import React from "react";
import "./Login.css";

const auth_endpoint = "https://accounts.spotify.com/authorize";

const clientId = "ae3f94d228c64ca69dfb58b533b679ef";
const redirectUri = "http://localhost:3000";
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

const accessUrl = `${auth_endpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20")}&response_type=token&show_dialog=true`;

const accessUrl2 = "https://accounts.spotify.com/authorize?client_id=ae3f94d228c64ca69dfb58b533b679ef&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"


function Login() {
  return (
    <div className="login">
      <img
        src="https://i.imgur.com/LFIighh.png"
        alt=""
      />

      <a href={accessUrl2}>Login to Spotify</a>
    </div>
  );
}

export default Login;