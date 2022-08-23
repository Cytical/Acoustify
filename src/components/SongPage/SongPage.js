import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import "./SongPage.css"
import SongInfo from "./SongInfo"
import SongAnalysis from "./SongAnalysis"
import SongRecom from "./SongRecom"

export default function SongPage({spotify}) {

    const { id } = useParams();
    const [track, setTrack] = useState(null)
    const [audioFeatures, setAudioFeatures] = useState([])
    const [audioKey, setAudioKey] = useState(null)
    const [audioMode, setAudioMode] = useState(null)
    const [recommendations, setRecommendations] = useState([])

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
            setAudioFeatures(data.body)
        }, function(err) {
            console.log(err);
        });

        spotify.getAudioAnalysisForTrack(id)
        .then(function(data) {
            setAudioKey(data.body.track.key)
            setAudioMode(data.body.track.mode)
        }, function(err) {
            console.log(err);
            });

        spotify.getRecommendations({
            seed_tracks: [id],
            min_popularity: 30,
            limit: 50,
            })
        .then(function(data) {
            setRecommendations(data.body.tracks);
            console.log(data.body.tracks);
        }, function(err) {
            console.log("Something went wrong!", err);
        });
    },  [spotify,id])



  return (
    <> 
    <div className='container'>
        {track ? <SongInfo {...track} spotify={spotify}/> : <></>}
        <SongAnalysis {...audioFeatures } audioKey={audioKey} audioMode={audioMode}/>
      <div className='recom-label'> Recommended Songs </div>
      <div className='table-scroll'>
        <table className="table table-dark table-striped table-hover align-middle saved-songs">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Album</th>
              <th scope="col"> &nbsp; <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
              <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                </svg> </th>
            </tr>
          </thead>
        {recommendations.map((track, i) => {
            return <SongRecom track={track} key={track.id} id={track.id} index={i}/>
        })}
        </table>
    </div>

    </div>
    </>
  )
}
