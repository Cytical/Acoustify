import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import "./SongPage.css"
import SongInfo from "./SongInfo"

export default function SongPage({spotify}) {

    const { id } = useParams();
    const [track, setTrack] = useState(null)
    const [audioAnalysis, setAudioAnalysis] = useState([])

    useEffect (() => {
        if (!spotify) return
        spotify.getTrack(id)
        .then(function(data) {
            setTrack(data.body)
        }).catch(function(error) {
        console.error('error', error);
        })

        spotify.getAudioFeaturesForTrack(id)
        .then(function(data) {
            // console.log(data.body);
            setAudioAnalysis(data.body)
        }, function(err) {
            console.log(err);
        });

        spotify.getAvailableGenreSeeds()
        .then(function(data) {
            let genreSeeds = data.body;
            // console.log(genreSeeds);
        }, function(err) {
            console.log('Something went wrong!', err);
        });
    },  [spotify,id])

  return (
    <> 
    <div className='container'>
        {track ? <SongInfo {...track} spotify={spotify}/> : <></>}
    </div>
    </>
  )
}
