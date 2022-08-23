import React from 'react'

export default function SongAnalysis({acousticness, danceability, energy, instrumentalness, liveness, loudness, speechiness, valence, tempo, time_signature, audioKey, audioMode}) {
    //tempo = bpm, valence = cheerfulness, loudness = in negative dB

    const numToPitch = (num) => {
        const pitchClass = {0: 'C', 1: 'C#', 2:'D', 3:'D#', 4:'E', 5:'F',6:'F#',7:'G', 8:'G#', 9:'A', 10: 'A#', 11:'B'}
        try {
            return pitchClass[num]
        }
        catch {
            return ''
        }

    }

  return (
    <>
    <div className='analysis'>
    <div className='row'>
        <div className='col-sm-4'>
            <div className='song-page-label'> Song Analysis </div>
        </div>
    </div>
    <div className='row'>
        <div className='col-sm-3'>
            <div className='analysis-label'> Acousticness:</div>
            <div className="progress">
            <div className="progress-bar progress-bar-striped progress-bar-animated" style={{width: acousticness * 100 +"%"}} ></div> 
            </div>
            <div className='analysis-label'> Danceability:</div>
            <div className="progress">
            <div className="progress-bar progress-bar-striped progress-bar-animated" style={{width: danceability * 100 +"%"}} ></div> 
            </div>           
            <div className='analysis-label'> Energy:</div>
            <div className="progress">
            <div className="progress-bar progress-bar-striped progress-bar-animated" style={{width: energy * 100 +"%"}} ></div> 
            </div>     
        </div>
        <div className='col-sm-1'></div>
        <div className='col-sm-3'>
            <div className='analysis-label'> Instrumentalness:</div>
            <div className="progress">
            <div className="progress-bar progress-bar-striped progress-bar-animated" style={{width: instrumentalness * 100 +"%"}} ></div>  
            </div>  
            <div className='analysis-label'> Liveness:</div>
            <div className="progress">
            <div className="progress-bar progress-bar-striped progress-bar-animated" style={{width: liveness * 100 +"%"}} ></div> 
            </div>  
            <div className='analysis-label'> Loudness:</div>
            <div className="progress">
            <div className="progress-bar progress-bar-striped progress-bar-animated" style={{width: loudness * -10 +"%"}} ></div> 
            </div>                                  
        </div>
        <div className='col-sm-1'></div>
        <div className='col-sm-3'>
            <div className='analysis-label'> Speechiness:</div>
            <div className="progress">
            <div className="progress-bar progress-bar-striped progress-bar-animated" style={{width: speechiness * 100 +"%"}} ></div>  
            </div>  
            <div className='analysis-label'> Valence:</div>
            <div className="progress">
            <div className="progress-bar progress-bar-striped progress-bar-animated" style={{width: valence * 100 +"%"}} ></div> 
            </div>                                   
        </div>
    </div>
    <div className='row song-key-info'>
        <div className='col-lg-1'></div>
        <div className='col-lg-10'>
            <div className='song-info-label'> {numToPitch(audioKey)} </div>
            <div className='info-label-name'> Key </div>
            <div className='song-info-label'> {audioMode ? 'Major' : 'Minor'} </div>
            <div className='info-label-name'> Mode </div>
            <div className='song-info-label'> {time_signature + '/4'} </div>
            <div className='info-label-name'> Time Signature </div>
            <div className='song-info-label'> {Math.round(tempo, 2)} </div>
            <div className='info-label-name'> BPM </div>
        </div>        
        <div className='col-1'></div>
    </div>
    </div>
    </>
  )
}
