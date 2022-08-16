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

  const [token, setToken] = useState("");
  // const [userTracks, setUserTracks] = useState([]);
  // const [userTopTracks, setUserTopTracks] = useState([]);

  useEffect(() => {
    if (!accessToken) return
    spotifyApi.setAccessToken(accessToken)
    setToken(spotifyApi)
  }, [accessToken])
  

  // useEffect(() => {
  //   if (!accessToken) return
  //   spotifyApi.setAccessToken(accessToken)
  // // Get the authenticated user
  // spotifyApi.getMe()
  //   .then(function(data) {
  //     const username = data.body.display_name;
  //     setUsername(username)

  //   }, function(err) {
  //     console.log('Something went wrong!111', err);
  //   });

  // // Get tracks in the signed in user's Your Music library
  // spotifyApi.getMySavedTracks({
  //     limit : 10,
  //     offset: 1
  //   })
  //   .then(function(data) {
  //     data.body.items.forEach(track => {
  //       setUserTracks(old => [...old, track])
  //     })
  //   }, function(err) {
  //     console.log('Something went wrong!222', err);
  //   });



  // }, [accessToken])

  
  return (
    <BrowserRouter>
      <Header />
        <Routes> 
          <Route path="/" element={<Library/>}/>
          <Route path="top-artists" element={<TopArtists spotify={token}/>}/>
          <Route path="top-songs" element={<TopSongs spotify={token}/>}/>
          <Route path="top-songs/short-term" element={<TopSongs spotify={token} timeRange={'short_term'}/>}/>
          <Route path="top-songs/medium-term" element={<TopSongs spotify={token} timeRange={'medium_term'}/>}/>
          <Route path="top-songs/long-term" element={<TopSongs spotify={token} timeRange={'long_term'}/>}/>
          <Route path="recommend" element={<Recommend/>}/>
        </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  )
}
