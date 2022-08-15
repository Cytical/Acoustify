import React, { useEffect, useState } from 'react'
import useAuth from '../useAuth'
import SpotifyWebApi from 'spotify-web-api-node'
import Header from './Header/Header.js'
import Library from './Library/Library.js'
import TopArtists from './TopArtists/TopArtists.js'
import TopSongs from './TopSongs/TopSongs.js'
import Recommend from './Recommend/Recommend.js'
import Footer from './Footer/Footer.js'
import { BrowserRouter, Routes, Route } from "react-router-dom";

const spotifyApi = new SpotifyWebApi({
  clientId: 'ae3f94d228c64ca69dfb58b533b679ef',
})

export default function Menu({ code }) {
  
  const accessToken = useAuth(code);

  const [username, setUsername] = useState("");
  const [userTracks, setUserTracks] = useState([]);
  const [userTopTracks, setUserTopTracks] = useState([]);

  // useEffect(() => {
  //   if (!accessToken) return
  //   spotifyApi.setAccessToken(accessToken)
  // }, [accessToken])

  useEffect(() => {
    if (!accessToken) return
    spotifyApi.setAccessToken(accessToken)
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
      data.body.items.forEach(track => {
        setUserTracks(old => [...old, track])
      })
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
      setUserTopTracks([])
      data.body.items.forEach(track => {
        setUserTopTracks(old => [...old, track])
      })
    }, function(err) {
      console.log('Something went wrong!', err);
    });


  }, [accessToken])

  
  return (
    <BrowserRouter>
      <Header />
      {/* <Library data={JSON.stringify(user_tracks)}/> */}
        <Routes> 
          <Route path="/" element={<Library/>}/>
          <Route path="top-artists" element={<TopArtists/>}/>
          <Route path="top-songs" element={<TopSongs data={userTopTracks}/>}/>
          <Route path="recommend" element={<Recommend/>}/>
        </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  )
}
