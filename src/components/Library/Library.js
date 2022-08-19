import React, { useState,useEffect } from 'react'
import './Library.css'

export default function Library({spotify}) {

  const [userLibrary, setUserLibrary] = useState([])

  console.log(spotify)

  useEffect(() => {
  // Get tracks in the signed in user's Your Music library
  spotify.getMySavedTracks({ limit : 1, offset: 1 })
  .then(function(data) {
    setUserLibrary([])
    data.body.items.forEach(library => {
      setUserLibrary(old => [...old, library])
    })
  }, function(err) {
    console.log('Something went wrong!', err);
  }); 
  }, [spotify])

  console.log(userLibrary)


  return (
    <>
    <div>{JSON.stringify(userLibrary)}</div>
    <div> lib</div> 
    </>
  )
}
