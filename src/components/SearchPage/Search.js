import React, { useEffect, useState } from 'react'
import SearchedSong from './SearchedSongs'

export default function Search({spotify}) {

    const [search, setSearch] = useState("")
    const [results, setResults] = useState([])

    useEffect(() => {
        spotify.searchTracks(search)
        .then(function(data) {
            setResults(data.body.tracks.items);
        }, function(err) {
            console.error(err);
        });
    }, [spotify, search])


  return (
    <>
    <div className="container d-flex flex-column my-4 " style={{height: "100vh"}}>
        <form>
        <div className="mb-3 mt-5 ">
            <input type="search" className="form-control-lg form-control" value={search} placeholder='Search Songs/Artists' onChange={e => setSearch(e.target.value)}/>
        </div>
        </form>
        <div className="flex-grow-1 my-2" style={{overflowY: "auto"}}>
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
        {results.map((track, i) => {
            return <SearchedSong track={track} key={track.id} id={track.id} index={i}/>
        })}
        </table>
        </div>
        </div>
    </div>
  </>
  )
}
