import React, { useEffect, useState } from 'react'
import { Link } from'react-router-dom';

export default function Playlist( {data, index, id, spotify} ) {

    const [playlistTracks, setPlaylistTracks] = useState([])
    const playlistImage = data.images[0].url;
    const playlistName = data.name
    
  useEffect(() => {
    spotify.getPlaylistTracks(id, {
      limit: 50,
      fields: 'items',
    })
    .then(
      function(data) {
        setPlaylistTracks(data.body)
      },
      function(err) {
        console.log('Something went wrong!', err);
      }
    );}, [spotify,id])

  return (
    <div className="col-lg-3 playlist-container">
          <Link className='link' to='/playlist-songs/' state={{data: playlistTracks}}>
        <img className="playlist-img" src={playlistImage} alt="" height={250} width={250}/>
        <img className="play-img" src="https://i.imgur.com/nSI8BGn.png" alt="" height={70} width={70}/>
        <div className="card-body">
            {playlistName}
        </div>
        </Link>
    </div>
  )
}
