import React from 'react'

export default function TopSongs(props) {

  return (
    <>
    <h1>TopSongs</h1>
    <h2> {JSON.stringify(props.data)} </h2>
    </>
  )
}
