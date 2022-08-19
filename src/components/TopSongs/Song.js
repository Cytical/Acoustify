import React from 'react'

export default function Song( {data, id, index} ) {

    // console.log(data)
    const songName = data.name
    const artist = data.artists[0].name
    const albumImage = data.album.images[1].url

    // console.log('test')

  return (
    <div className='container-sm song'> 
        <div className='row'> 
            <div className='col-lg-2'>
                <div className='song-rank'>{index + 1}</div> 
            </div>
            <div className="col-lg-4">
                <img className='album-img' src={albumImage} alt='' width={200} height={200}/>
            </div>
            <div className="col-lg-6">
                <div className='container info'> 
                    <div className='song-name'> {songName} </div> 
                    <div className='artist'> {artist} </div> 
                </div> 
            </div>
        </div>
    </div>
  )
}
