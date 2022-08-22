import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import "./SongInfo.css"
import moment from 'moment/moment'

export default function SongInfo({spotify}) {

    const { id } = useParams();
    const [track, setTrack] = useState(null)

    useEffect (() => {
        if (!spotify) return
        spotify.getTrack(id)
        .then(function(data) {
            setTrack(data.body)
        }).catch(function(error) {
        console.error('error', error);
    }); }, [spotify,id])

    const SongDetails = ({artists, name, album, external_urls, preview_url}) => {

        var song_artists = []

        for (let i=0; i < artists.length; i++ ) {
            song_artists.push(artists[i].name + " ")
        }

        const albumImage = album.images[1].url;
        const albumId = album.id;
        const albumName = album.name;
        const albumDate = album.release_date;
        const spotifyLink = external_urls.spotify;
        console.log(album)

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

        const [playing, toggle] = useAudio(preview_url);

        return (
        <>
        <div className='row'>
            <div class='col-lg-4'>
                <img className='album-img' src={albumImage} alt=''/>
            </div>
            <div className='col-lg-4'> 
                <div className='song-title'> {name} </div>
                <div className='song-artists'> {song_artists.join(",")} </div>
            </div>
        </div>
        <div className='row'>
            <div class='col-lg-4'>
                <div className='released'> Released: </div>
                <div className='album-date'> {moment(albumDate).format('MMM  YYYY')} </div>
            </div>
            <div className='col-lg-4'> 
                {preview_url ? <input className="play-img-song" type="image" src="https://i.imgur.com/nSI8BGn.png" alt='' height={50} width={50} onClick={toggle}/>
                 :<img className="play-img-song" src='https://cdn.pixabay.com/photo/2017/02/12/21/29/false-2061131__340.png' alt='' height={50} width={50} />}
            </div>
            <div className='col-lg-4'>
                <div className=''> Released: </div>
                <div className=''> {moment(albumDate).format('MMM  YYYY')} </div>
            </div>
        </div>
        <div className='row'>

        </div>


        </>
        )
    }

    // console.log(track)


  return (
    <> 
    <div className='container'>
        {track ? <SongDetails {...track}/> : <></>}
    </div>
    </>
  )
}
