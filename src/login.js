import React from "react";
import "./Login.css";

const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=ae3f94d228c64ca69dfb58b533b679ef&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"


function Login() {
  return (
    <div className="login">
        {/* <h1>hello</h1>  */}
      <img
        src="https://i.imgur.com/LFIighh.png"
        alt=""
      />

      <a href={AUTH_URL}>Login to Spotify</a>
    </div>
  );
}

export default Login;