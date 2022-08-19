import React, { useState,useEffect } from 'react'
import SavedSong from './SavedSong'
import './Library.css'

export default function Library({spotify}) {

  const [userLibrary, setUserLibrary] = useState([])

  useEffect(() => {
    if (!spotify) return
    // Get tracks in the signed in user's Your Music library
    spotify.getMySavedTracks({ limit : 50 })
    .then(function(data) {
      setUserLibrary([])
      data.body.items.forEach(library => {
        setUserLibrary(old => [...old, library])
      })
    }, function(err) {
      console.log('Something went wrong!', err);
    }); 
  }, [spotify])

  console.log(userLibrary)


  return (
    <>
    <div className='container'>
      <div className='library-label'> Liked Songs </div>
      <div className='table-scroll'>
        <table className="table table-dark table-striped table-hover align-middle">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Album</th>
              <th scope="col">Date Added</th>
              <th scope="col"> &nbsp; <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
              <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                </svg> </th>
            </tr>
          </thead>
            {userLibrary.map((data, i) => { 
              return <SavedSong data={data} index={i} id={data.track.id}/>
            })}
        </table>
        </div>
      <div className='library-label'> Your Albums </div>
    </div>
    </>
  )
}
