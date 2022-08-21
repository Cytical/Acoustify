import React, {useState, useEffect} from 'react'
import moment from 'moment/moment'
import ReactPlayer from 'react-player'

export default function SavedSong( {data, index, id} ) {

    // console.log(data)
    const songName = data.track.name
    const artist = data.track.artists[0].name
    const albumImage = data.track.album.images[1].url
    const albumName = data.track.album.name
    const dateAdded = data.added_at
    // const songDateRelease = data.track.album.release_date
    const songDurationMs = data.track.duration_ms
    const previewAudio = data.track.preview_url
    // console.log(previewAudio)

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

    const useAudio = (previewAudio) => {
        const [audio] = useState(new Audio(previewAudio));
        const [playing, setPlaying] = useState(false);

        const toggle = () => setPlaying(!playing);

        useEffect(() => {
            playing ? audio.play() : audio.pause();
            },
            [playing]
        );

        useEffect(() => {
            audio.addEventListener('ended', () => setPlaying(false));
            return () => {
            audio.removeEventListener('ended', () => setPlaying(false));
            };
        }, []);

        return [playing, toggle];
    };

    const [playing, toggle] = useAudio(previewAudio);

  return (
    <>
    {/* <ReactPlayer url= {previewAudio} /> */}
    <tbody>
        <tr className='current-song'>
            <th className='td-element text-muted' scope="row"> {index + 1}
            </th>
            <td className='td-element'>
                <img className= "lib-img" src= {albumImage} alt='' width={80} height={80} /> 
                {previewAudio ? <input className="play-img-song" type="image" src="https://i.imgur.com/nSI8BGn.png" alt='' height={50} width={50} onClick={toggle}/>
                 :<img className="play-img-song" src='https://cdn.pixabay.com/photo/2017/02/12/21/29/false-2061131__340.png' alt='' height={50} width={50} />}
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
