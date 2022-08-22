import React, {useEffect, useState} from 'react'
import moment from 'moment/moment'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export default function SongInfo({artists, name, album, external_urls, preview_url, duration_ms, spotify}) {

        const [artistInfo, setArtistInfo] = useState(null);
        const [artistGenres, setArtistGenres] = useState([]); 

        var song_artists = []

        for (let i=0; i < artists.length; i++ ) {
            song_artists.push(artists[i].name)
        }

        const artistId = artists[0].id
        const albumImage = album.images[1].url;
        const albumId = album.id;
        const albumName = album.name;
        const albumDate = album.release_date;
        const spotifyLink = external_urls.spotify;

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

        useEffect(() => {
        spotify.getArtist(artistId)
        .then(function(data) {
            const artist = data.body;
            setArtistGenres(artist.genres)
        }, function(err) {
            console.error(err);
        });
        },[] )

        return (
        <>
        <div className='row'>
            <div className='col-lg-4'>
                <img className='album-img-info img-fluid w-100' src={albumImage} alt='' />
                <div className='audio-player'>
                {preview_url ?
                <AudioPlayer
                    autoPlay={true}
                    src={preview_url}
                    volume={0.2}
                    layout={'stacked'}
                    />
                    : <h3>Song not available</h3>}
                </div>
            </div>
            <div className='col-lg-8 song-details'> 
                <div className='song-title'> {name} </div>
                <div className='song-artists'> {song_artists.join(" , ")} </div>
                <div className='row'>
                    <div className='col-lg-6'>
                        <div className='info-label'> Released: </div>
                        <div className='album-info'> {moment(albumDate).format('MMM  YYYY')} </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className='info-label'> Album: </div>
                        <div className='album-info'>  {albumName} </div>
                    </div>
                <div className='row'> 
                    <div className='col-lg-6'>
                        <div className='info-label'> Genres: </div>
                        <div className='genres'>  {artistGenres.join(" , ")} </div>
                    </div>
                    <div className='col-lg-6 adjust'>
                        <div className='info-label'> Duration: </div>
                        <div className='album-info'>  {msToTime(duration_ms)} </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </>
        )
    }
