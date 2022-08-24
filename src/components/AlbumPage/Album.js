import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

export default function Album({spotify}) {

    const albumId = useParams();
    const [albumTracks, setAlbumTracks] = useState([]);

    console.log(albumId)

    useEffect(()=> {
        spotify.getAlbumTracks(albumId, { limit : 50})
        .then(function(data) {
            console.log('ALBUM', data.body);
            setAlbumTracks(data.body)
        }, function(err) {
            console.log('Something went wrong!', err);
        });

    }, [spotify, albumId])

    console.log(albumTracks)
  return (
    <div>Album</div>
  )
}
