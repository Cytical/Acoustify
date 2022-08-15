import React from 'react'
import Song from './Song'
import './TopSongs.css'

export default function TopSongs({data}) {

  return (
    <>
    <div className='page-info'> Top Songs </div>

    {data.map((data, key) => { 
      return <Song data={data} id={key}/>
    })}
    </>
  )
}
