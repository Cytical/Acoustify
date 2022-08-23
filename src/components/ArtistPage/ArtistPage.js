import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ArtistInfo from './ArtistInfo';

export default function ArtistPage({spotify}) {

    const { id } = useParams();
    const [artistData, setArtistData] = useState(null)

    useEffect(() => {
        if (!spotify) return 

        spotify.getArtist(id)
        .then(function(data) {
            setArtistData(data.body)
        }, function(err) {
            console.error(err);
        });

    }, [spotify])

    console.log(artistData)

  return (
    <>
    <div className='container'>
        <ArtistInfo {...artistData} spotify={spotify}/>
    </div>
    </>
  )
}
