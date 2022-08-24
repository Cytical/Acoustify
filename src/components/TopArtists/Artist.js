import React from 'react'
import { Link } from'react-router-dom';

export default function Artist( {data, id, index} ) {

    const artistName = data.name
    const artistImage = data.images[1].url

return (
<>
    <div className="col-lg-4">
        <Link className='link' to={'/artist/' + id}>
        <div className='artist-rank'> {index + 1} </div>
        <div className='artist-name'> {artistName} </div>
        <img className='artist-img' src={artistImage} alt='' width={300} height={300}/>
        </Link>
    </div>
</>
  )
}
