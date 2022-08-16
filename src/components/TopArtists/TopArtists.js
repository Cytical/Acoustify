import React, { useState,useEffect } from 'react'
import { Link } from'react-router-dom';
import Artist from './Artist'
import './TopArtists.css'

export default function TopArtists({spotify}) {

    const [userTopArtists, setUserTopArtists] = useState([]);

    useEffect(() => {
    /* Get a User’s Top Artists*/
    spotify.getMyTopArtists()
    .then(function(data) {
        setUserTopArtists([])
        data.body.items.forEach(artist => {
        setUserTopArtists(old => [...old, artist])
      })
    }, function(err) {
        console.log('Something went wrong!333', err);
    }); }, [spotify])

    return (
        <>
        {userTopArtists.map((data, key) => { 
            return <Artist data={data} id={key}/>
        })}
        </>
    )

 }  
