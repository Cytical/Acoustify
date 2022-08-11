import React, { useEffect, useState } from 'react'
import useAuth from './useAuth'
import SpotifyWebApi from 'spotify-web-api-node'

const spotifyApi = new SpotifyWebApi({
  clientId: 'ae3f94d228c64ca69dfb58b533b679ef',
})

export default function Menu({ code }) {
  
  const accessToken = useAuth(code);

  const [username, setUsername] = useState("");
  const [user_albums, setUser_albums] = useState([]);
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
      console.log('Something went wrong!', err);
    });

  // Get tracks in the signed in user's Your Music library
  spotifyApi.getMySavedTracks({
      limit : 50,
      offset: 1
    })
    .then(function(data) {
      data.body.items.map(track => {
        const track_info = track
        console.log(track.track.name)
      })
    }, function(err) {
      console.log('Something went wrong!', err);
    });


  }, [accessToken])

  
  return (
    <div>{username} </div> 

  )
}
