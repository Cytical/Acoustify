import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SpotifyWebApi from 'spotify-web-api-node'


export default function Auth(code) {
    const [accessToken, setAccessToken] = useState()
    const [refreshToken, setRefreshToken] = useState()
    const [expiresIn, setExpiresIn] = useState()

    console.log(code)

    console.log(accessToken)

    const spotifyApi = new SpotifyWebApi({
    clientId: 'ae3f94d228c64ca69dfb58b533b679ef',
    })

    useEffect(() => {
    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'https://acoustify-app.herokuapp.com/',
        clientId: 'ae3f94d228c64ca69dfb58b533b679ef',
        clientSecret: 'd7de0fe9efc04794b090795a1b8c8e0a',
    })

    spotifyApi.authorizationCodeGrant(code).then(function(data) {
        setAccessToken(data.body['expires_in']);
        setRefreshToken(data.body['access_token'])
        setExpiresIn(data.body['refresh_token'])
        }).catch((err) => {
        console.log(err)
        // window.location = '/'
    })
    }, [code])

    // useEffect(() => {
    //     axios.post("http://localhost:3001/login", {code,})
    //     .then(res => {
    //         setAccessToken(res.data.accessToken)
    //         setRefreshToken(res.data.refreshToken)
    //         setExpiresIn(res.data.expiresIn)
    //         window.history.pushState({}, null, '/')
    //     }).catch((err) => {
    //         console.log(err)
    //         // window.location = '/'
    //     })
    // }, [code]) 

    // useEffect(() => {
    //     if (!refreshToken || !expiresIn) return
    //     const interval = setInterval(() => { 
    //     axios.post("http://localhost:3001/refresh", {refreshToken,})
    //     .then(res => {
    //         setAccessToken(res.data.accessToken)
    //         setExpiresIn(res.data.expiresIn)
    //     }).catch(() => {
    //         window.location = '/'
    //     })
    //     }, (expiresIn - 60) * 1000)
    //     return () => clearInterval(interval)
    // }, [refreshToken, expiresIn])

    return accessToken
}

