import React, {useState, useEffect} from 'react'
import moment from 'moment/moment'
import { Link } from'react-router-dom';

export default function SavedSong( {data, index, id} ) {

    const songName = data.track.name
    const artist = data.track.artists[0].name
    const albumImage = data.track.album.images[1].url
    const albumName = data.track.album.name
    const dateAdded = data.added_at
    const songDurationMs = data.track.duration_ms
    // const previewAudio = data.track.preview_url

    const msToTime = (s) => {
        var ms = s % 1000;
        s = (s - ms) / 1000;
        var secs = s % 60;
        s = (s - secs) / 60;
        var mins = s % 60;
        secs = secs.toString();

        if (secs.length < 2) {
            secs = secs.concat('0');
        } 
        return  mins + ':' + secs;
    }

  return (
    <>
    <tbody>
        <tr className='current-song'>
            <th className='td-element text-muted' scope="row"> {index + 1}
            </th>
            <td className='td-element'>
                <Link className="song-link" to={'song/' + id}> 
                <img className= "lib-img" src= {albumImage} alt='' width={80} height={80} /> 
                </Link>
                <div className='lib-song-name'> <Link className="song-link" to={'song/' + id}> {songName} </Link></div>
                <div className='lib-song-artist'> <Link className="song-link-artist" to={'song/' + id}> {artist} </Link></div>
            </td>
            <td className='td-element'> <Link className="song-link" to={'song/' + id}> {albumName} </Link> </td>
            <td className='td-element date-added'> <Link className="song-link" to={'song/' + id}> {moment(dateAdded).fromNow()} </Link> </td>
            <td className='td-element text-gray'> <Link className="song-link" to={'song/' + id}> {msToTime(songDurationMs)} </Link> </td>
        </tr>
    </tbody>
    </>
  )
}
