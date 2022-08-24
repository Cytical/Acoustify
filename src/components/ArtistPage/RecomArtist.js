import React from 'react'
import { Link } from'react-router-dom';

export default function RecomArtist({data, id, index}) {

    const artistName = data.name
    const artistImage = data.images[1].url

return (
<>
    <div className="col-lg-4">
        <Link className='link' to={'/artist/' + id}>
        <img className='artist-img' src={artistImage} alt='' width={320} height={320}/>
        <div className='artist-name'> {artistName} </div>
        </Link>
    </div>
</>
  )
}
