import React, { useState,useEffect } from 'react'
import Song from './Song'
import './TopSongs.css'

export default function TopSongs({spotify, timeRange}) {

  const [userTopTracks, setUserTopTracks] = useState([]);
  console.log(timeRange)

  // Don't know why need to have useEffect otherwise it keeps looping and rerendering
  useEffect(() => {
    /* Get a User’s Top Tracks*/
  spotify.getMyTopTracks({time_range: timeRange, limit: 50})
    .then(function(data) {
      setUserTopTracks([])
      data.body.items.forEach(track => {
        setUserTopTracks(old => [...old, track])
      })
    }, function(err) {
      console.log('Something went wrong!', err);
    });}, [spotify, timeRange])

  return (
    <>
    <div className='page-info'> Top Songs </div>
    <div> {timeRange} </div>

    {userTopTracks.map((data, key) => { 
      return <Song data={data} id={key}/>
    })}
    </>
  )
}
