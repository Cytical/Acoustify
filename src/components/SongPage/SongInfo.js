import React from 'react'
import moment from 'moment/moment'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export default function SongDetails({artists, name, album, external_urls, preview_url, spotify}) {

        var song_artists = []

        console.log(artists[0].id)
        

        for (let i=0; i < artists.length; i++ ) {
            song_artists.push(artists[i].name + " ")
        }

        const albumImage = album.images[1].url;
        const albumId = album.id;
        const albumName = album.name;
        const albumDate = album.release_date;
        const spotifyLink = external_urls.spotify;

        spotify.getArtist('2hazSY4Ef3aB9ATXW7F5w3')
        .then(function(data) {
            console.log('Artist information', data.body);
        }, function(err) {
            console.error(err);
        });

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
                <div className='song-artists'> {song_artists.join(",")} </div>
                <div className='row'>
                    <div className='col-lg-6'>
                        <div className='info-label'> Released: </div>
                        <div className='album-info'> {moment(albumDate).format('MMM  YYYY')} </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className='info-label'> Album: </div>
                        <div className='album-info'>  {albumName} </div>
                    </div>
                </div>
            </div>
        </div>
        </>
        )
    }
