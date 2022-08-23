import React from 'react'
import {useLocation} from 'react-router-dom';

export default function PlaylistSongs() {

    const location = useLocation()
    console.log(location.data)


  return (
    <> 
    <div>PlaylistSongs</div>
    <div>h</div>
    </>
  )
}
