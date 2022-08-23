import React from 'react'
import { Link } from'react-router-dom';

export default function Artist( {data, id, index} ) {

    // console.log(data)
    const artistName = data.name

    const artistImage = data.images[1].url
    // console.log(artistImage)

return (
<>
    <div className="col-lg-4">
        <Link to={'/artist/' + id}>
        <div className='artist-rank'> {index + 1} </div>
        <div className='artist-name'> {artistName} </div>
        <img className='artist-img' src={artistImage} alt='' width={320} height={320}/>
        </Link>
    </div>
</>
  )
}
