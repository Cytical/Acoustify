import React, { useEffect, useState } from 'react'
import ArtistSongs from "./ArtistSongs"

export default function ArtistInfo({followers, genres, images, name, popularity, id, spotify}) {

  const [artistTracks, setArtistTracks] = useState([])

  const artistImage = images[1].url

  useEffect(() => {
    spotify.getArtistTopTracks(id, 'PH')
    .then(function(data) {
      setArtistTracks(data.body.tracks);
      }, function(err) {
      console.log('Something went wrong!', err);
    });
  }, [spotify, id])

  console.log(artistTracks)
  
  return (
    <>
    <div className='artist-info-container'>
        <div className='row'>
          <div className='col-lg-3'>
              <img className='artist-img-info img-fluid w-100' src={artistImage} alt='' />
              <div className='artist-title'> {name} </div>
              <div className='info-label-artist'> Genres:</div>
              <div className='artist-genres'> {genres.join(" , ")} </div>
              <div className='info-label-artist'> Popularity:</div>
              <div className="progress popularity">
                  <div className="progress-bar progress-bar-striped progress-bar-animated" style={{width: popularity +"%"}} ></div>
              </div>
          </div>
          <div className='col-lg-9'>
              <div className='container'>
                <div className='recom-label'> Artist Top Songs </div>
                <div className='table-scroll'>
                  <table className="table table-dark table-striped table-hover align-middle saved-songs">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Album</th>
                        <th scope="col">Date Released</th>
                        <th scope="col"> &nbsp; <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                          </svg> </th>
                      </tr>
                    </thead>
                      {artistTracks.map((data, i) => { 
                        return <ArtistSongs track={data} index={i} key={data.id} id={data.id}/>
                      })}
                  </table>
              </div>
            </div>    
          </div>
        </div>
    </div>
    </>
  )
}
