import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ArtistInfo from './ArtistInfo';
import ArtistAlbum from './ArtistAlbum';
import RecomArtist from './RecomArtist';
import './ArtistPage.css'

export default function ArtistPage({spotify}) {

    const { id } = useParams();
    const [artistData, setArtistData] = useState(null)
    const [artistAlbums, setArtistAlbums] = useState([])
    const [relatedArtists, setRelatedArtists] = useState([]);

    useEffect(() => {
        spotify.getArtist(id)
        .then(function(data) {
            setArtistData(data.body);
        }, function(err) {
            console.error(err);
        });

        spotify.getArtistAlbums(id, {limit: 12})
        .then(function(data) {
            setArtistAlbums(data.body.items)
        }, function(err) {
            console.error(err);
        });

        spotify.getArtistRelatedArtists(id)
        .then(function(data) {
            setRelatedArtists(data.body.artists)
        }, function(err) {
            console.log(err);
        })

    }, [spotify, id])

    console.log(relatedArtists)
    console.log(relatedArtists.length)

    const renderAlbum = () => {

    var data1 = []

        for (var i = 0; i < artistAlbums.length; i++) {

            if (i % 4 === 0 ) {
                if (i + 3 < artistAlbums.length) {
                data1.push(
                <div className='container-lg playlist'>
                    <div className='row'>
                        <ArtistAlbum data={artistAlbums[i]} id={artistAlbums[i].id} key={artistAlbums[i].id} index={i} spotify={spotify} artistId ={id}/>
                        <ArtistAlbum data={artistAlbums[i + 1]} id={artistAlbums[i + 1].id} key={artistAlbums[i + 1].id} index={i + 1} spotify={spotify} artistId ={id}/>
                        <ArtistAlbum data={artistAlbums[i + 2]} id={artistAlbums[i + 2].id} key={artistAlbums[i + 2].id} index={i + 2} spotify={spotify} artistId ={id}/>
                        <ArtistAlbum data={artistAlbums[i + 3]} id={artistAlbums[i + 3].id} key={artistAlbums[i + 3].id} index={i + 3} spotify={spotify} artistId ={id}/>
                    </div>
                </div>)
                }
            }
        } return data1}

    const albumDataRender = renderAlbum() 

    const renderArtist = () => {

    var data2 = []

    for (var i = 0; i < relatedArtists.length; i++) {

        if (i % 3 === 0 ) {
            if (i + 2 < relatedArtists.length) {
            data2.push(
            <div className='container-sm artist'>
                <div className='row'>
                    <RecomArtist data={relatedArtists[i]} id={relatedArtists[i].id} key={relatedArtists[i].id} index={i}/>
                    <RecomArtist data={relatedArtists[i + 1]} id={relatedArtists[i + 1].id} key={relatedArtists[i + 1].id} index={i + 1}/>
                    <RecomArtist data={relatedArtists[i + 2]} id={relatedArtists[i + 2].id} key={relatedArtists[i + 2].id} index={i + 2}/>
                </div>
            </div>)
            }}
        } return data2 }

    const artistDataRender = renderArtist() 

  return (
    <>
    <div className='container'>
        {artistData ? <ArtistInfo {...artistData} spotify={spotify}/> : <></>}
        <div className='container'>
        <div className='library-playlist-label'> Similar Artists</div>
            {artistDataRender}
        <div className='library-playlist-label'>  Albums </div>
            {albumDataRender}
        </div>
    </div> 
    </>
  )
}

