import React from 'react'
import moment from 'moment/moment'

export default function SavedSong( {data, index, id} ) {

    // console.log(data)
    const songName = data.track.name
    const artist = data.track.artists[0].name
    const albumImage = data.track.album.images[1].url
    const albumName = data.track.album.name
    const dateAdded = data.added_at
    // const songDateRelease = data.track.album.release_date
    const songDurationMs = data.track.duration_ms

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
        <tr>
            <th className='td-element text-muted' scope="row"> {index + 1} </th>
            <td className='td-element'>
                <img className= "lib-img" src= {albumImage} alt='' width={80} height={80}/> 
                <div className='lib-song-name'> {songName} </div>
                <div className='lib-song-artist'>{artist} </div>
            </td>
            <td className='td-element'> {albumName} </td>
            <td className='td-element date-added'> {moment(dateAdded).fromNow()} </td>
            <td className='td-element text-gray'> {msToTime(songDurationMs)} </td>
        </tr>
    </tbody>
    </>
  )
}
