import React, {useEffect, useState} from 'react'
import moment from 'moment/moment'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { Link } from'react-router-dom';

export default function SongInfo({artists, name, album, external_urls, preview_url, duration_ms, popularity, spotify}) {

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
        <div className='info-container'>
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
                    : <div className='not-available'>Song not available</div>}
                </div>
            </div>
            <div className='col-lg-8 song-details'> 
                <div className='song-title'> {name} </div>
                <Link className='link' to={'/artist/' + artistId}>
                <div className='song-artists artist-title-link'> {song_artists[0]} </div>
                </Link>
                <div className='row'>
                    <div className='col-6'>
                        <div className='info-label'> Released: </div>
                        <div className='album-info'> {moment(albumDate).format('MMM  YYYY')} </div>
                    </div>
                    <div className='col-6'>
                        <div className='info-label'> Album: </div>
                        <div className='album-info'>  {albumName} </div>
                    </div>
                <div className='row'> 
                    <div className='col-6'>
                        <div className='info-label'> Genres: </div>
                        <div className='genres'>  {artistGenres.join(" , ")} </div>
                    </div>
                    <div className='col-6 adjust'>
                        <div className='info-label'> Duration: </div>
                        <div className='album-info'>  {msToTime(duration_ms)} </div>
                    </div>
                </div>
                <div className='row'> 
                    <div className='col-4'>
                        <div className='info-label'> Popularity: </div>
                        <div className="progress popularity">
                        <div className="progress-bar progress-bar-striped progress-bar-animated" style={{width: popularity +"%"}} ></div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </div>
        </>
        )
    }
