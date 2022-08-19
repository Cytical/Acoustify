import React from 'react'

export default function Playlist( {data, index, id} ) {

    console.log(data)

    const playlist_image = data.images[0].url;
    const playlist_name = data.name

    console.log()



  return (
    <div className="col-lg-3 playlist-container">
        <img className="playlist-img" src={playlist_image} alt="" height={250} width={250}/>
        <img className="play-img" src="https://i.imgur.com/nSI8BGn.png" alt="" height={70} width={70}/>
        <div className="card-body">
            {playlist_name}
        </div>
    </div>
  )
}
