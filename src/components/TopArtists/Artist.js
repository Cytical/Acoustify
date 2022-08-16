import React from 'react'

export default function Artist( {data, id} ) {

    // console.log(data)
    const artistName = data.name

    const artistImage = data.images[1].url
    console.log(artistImage)

return (
<>
    <div className={(id % 3 === 0) && 'container-sm artist'}>
        <div className={(id % 3 === 0) && 'row'}>
            <div className="col-lg-4">
                <div className='artist-rank'> {id + 1} </div>
                <div className='artist-name'> {artistName} </div>

                <img className='artist-img' src={artistImage} alt='' width={320} height={320}/>
            </div>
        </div>
    </div>
</>
  )
}
