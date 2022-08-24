import React, { useEffect, useState } from 'react'
import Auth from '../useAuth'
import SpotifyWebApi from 'spotify-web-api-node'
import Header from './Header/Header.js'
import Library from './Library/Library.js'
import PlaylistSongs from './Library/PlaylistSongs.js'
import TopArtists from './TopArtists/TopArtists.js'
import TopSongs from './TopSongs/TopSongs.js'
import Recommend from './Recommend/Recommend.js'
import SongPage from './SongPage/SongPage.js'
import ArtistPage from './ArtistPage/ArtistPage'
import Footer from './Footer/Footer.js'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Album from './AlbumPage/Album.js'
import Search from './SearchPage/Search.js'


const spotifyApi = new SpotifyWebApi({
  clientId: 'ae3f94d228c64ca69dfb58b533b679ef',
})

export default function Menu({ code }) {

  var accessToken;
  // if (localStorage.token) {
  //   accessToken = localStorage.token
  // } else {
  //   accessToken = Auth(code);
  //   localStorage.token = accessToken
  // }
  accessToken = Auth(code);
  const [token, setToken] = useState("");

  useEffect(() => {
    if (!accessToken) return
    spotifyApi.setAccessToken(accessToken)
    setToken(spotifyApi)
  }, [accessToken])
  
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Header />
        <Routes> 
          <Route path="/" element={<Library spotify={token}/>}/>

          <Route path="top-artists" element={<TopArtists spotify={token}/>}/>
          <Route path="top-artists/short-term" element={<TopArtists spotify={token} timeRange={'short_term'}/>}/>
          <Route path="top-artists/medium-term" element={<TopArtists spotify={token} timeRange={'medium_term'}/>}/>
          <Route path="top-artists/long-term" element={<TopArtists spotify={token} timeRange={'long_term'}/>}/>

          <Route path="top-songs" element={<TopSongs spotify={token}/>}/>
          <Route path="top-songs/short-term" element={<TopSongs spotify={token} timeRange={'short_term'}/>}/>
          <Route path="top-songs/medium-term" element={<TopSongs spotify={token} timeRange={'medium_term'}/>}/>
          <Route path="top-songs/long-term" element={<TopSongs spotify={token} timeRange={'long_term'}/>}/>

          <Route path="song/:id" element={<SongPage spotify={token}/>}/>
          <Route path="artist/:id" element={<ArtistPage spotify={token}/>}/>

          <Route path="playlist-songs" element={<PlaylistSongs />}/>
          <Route path="album-songs/:id" element={<Album spotify={token}/>}/>

          <Route path="recommend" element={<Recommend/>}/>
          <Route path="search" element={<Search spotify={token}/>}/>
        </Routes>
      <Footer />
    </BrowserRouter>
  )
}
