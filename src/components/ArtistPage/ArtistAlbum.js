import React from 'react'
import { Link } from'react-router-dom';

export default function ArtistAlbum({data, id, spotify}) {

    const albumImage = data.images[0].url;
    const albumName = data.name;

  return (
    <div className="col-lg-3 playlist-container">
        <Link className='link' to={'/album-songs/' + id}>
            <img className="playlist-img" src={albumImage} alt="" height={250} width={250}/>
            <img className="play-img" src="https://i.imgur.com/nSI8BGn.png" alt="" height={70} width={70}/>
            <div className="card-body">
                {albumName}
            </div>
        </Link>
    </div>
  )
}
