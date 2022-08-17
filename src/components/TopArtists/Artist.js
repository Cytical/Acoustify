import React from 'react'

export default function Artist( {data, id} ) {

    // console.log(data)
    const artistName = data.name

    const artistImage = data.images[1].url
    // console.log(artistImage)

return (
<>

    <div className="col-lg-4">
        <div className='artist-rank'> {id + 1} </div>
        <div className='artist-name'> {artistName} </div>

        <img className='artist-img' src={artistImage} alt='' width={320} height={320}/>
    </div>

</>
  )
}
