import React from 'react'
import useAuth from './useAuth'

export default function Menu({ code }) {
  const accessToken = useAuth(code);
  return (
    <div> {code} </div>
  )
}
