import React, { useState,useEffect } from 'react'
import { Link } from'react-router-dom';
import Song from './Song'
import './TopSongs.css'

export default function TopSongs({spotify, timeRange}) {

  const [userTopTracks, setUserTopTracks] = useState([]);

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
    <div className='container time-frame'> 
    <div className='row'>
      <div className='col-lg-4'>
        <Link to= "/top-songs/short-term">
          <button className="btn btn-pink btn-block" type="button">
            Last Month
          </button>
        </Link>
      </div>
      <div className='col-lg-4'>
        <Link to= "/top-songs/medium-term">
          <button className="btn btn-pink btn-block" type="button">
            Last 6 Months
          </button>
        </Link>
      </div>
      <div className='col-lg-4'>
        <Link to= "/top-songs/long-term">
          <button className="btn btn-pink btn-block" type="button">
            Last 12 Months
          </button>
        </Link>
      </div>
      </div>
    </div>


    {userTopTracks.map((data, key) => { 
      return <Song data={data} id={key}/>
    })}
    </>
  )
}
