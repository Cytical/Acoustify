import React, { useEffect, useState } from 'react'
import useAuth from '../useAuth'
import SpotifyWebApi from 'spotify-web-api-node'
import Header from './Header/Header.js'
import Library from './Library/Library.js'
import "./Menu.css"

const spotifyApi = new SpotifyWebApi({
  clientId: 'ae3f94d228c64ca69dfb58b533b679ef',
})

export default function Menu({ code }) {
  
  const accessToken = useAuth(code);

  const [username, setUsername] = useState("");
  const [user_tracks, setUser_tracks] = useState([]);

  useEffect(() => {
    if (!accessToken) return
    spotifyApi.setAccessToken(accessToken)
  }, [accessToken])

  useEffect(() => {
    if (!accessToken) return
  // Get the authenticated user
  spotifyApi.getMe()
    .then(function(data) {
      const username = data.body.display_name;
      setUsername(username)

    }, function(err) {
      console.log('Something went wrong!111', err);
    });

  // Get tracks in the signed in user's Your Music library
  spotifyApi.getMySavedTracks({
      limit : 10,
      offset: 1
    })
    .then(function(data) {
      // data.body.items.map(track => {
      //   setUser_tracks(track)
      //   console.log(user_tracks)
      setUser_tracks(data)
    }, function(err) {
      console.log('Something went wrong!222', err);
    });

/* Get a User’s Top Artists*/
spotifyApi.getMyTopArtists()
  .then(function(data) {
    // console.log(data)
    let topArtists = data.body.items;
    // console.log(topArtists);
  }, function(err) {
    console.log('Something went wrong!333', err);
  });

/* Get a User’s Top Tracks*/
spotifyApi.getMyTopTracks()
  .then(function(data) {
    let topTracks = data.body.items;
    console.log(topTracks);
  }, function(err) {
    console.log('Something went wrong!', err);
  });


  }, [accessToken])

  
  return (
    <div> 
      <Header />
     <div>{username} </div> 
     {/* <Library data={JSON.stringify(user_tracks)}/> */}
    </div>
  )
}
