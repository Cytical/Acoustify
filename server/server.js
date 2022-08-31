const express = require('express');
const SpotifyWebApi = require('spotify-web-api-node');
const cors = require("cors")
const bodyParser = require("body-parser")


const app = express();
app.use(cors())
app.use(bodyParser.json())

console.log('server live')

app.post("/refresh", (req, res) => {

    console.log('hi')
    const refreshToken = req.body.refreshToken
    const spotifyApi = new SpotifyWebApi({
    redirectUri: 'https://acoustify.onrender.com/',
    clientId: 'ae3f94d228c64ca69dfb58b533b679ef',
    clientSecret: 'd7de0fe9efc04794b090795a1b8c8e0a',
    refreshToken,
    })

    spotifyApi
    .refreshAccessToken()
    .then(data => {
        res.json({
        accessToken: data.body.access_token,
        expiresIn: data.body.expires_in,
        })
    })
    .catch(err => {
        console.log(err)
        res.sendStatus(400)
    })
    })

app.post('/login', (req, res) => {
    const code = req.body.code

    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'https://acoustify.onrender.com/',
        clientId: 'ae3f94d228c64ca69dfb58b533b679ef',
        clientSecret: 'd7de0fe9efc04794b090795a1b8c8e0a',
    })

    spotifyApi.authorizationCodeGrant(code).then(data => {
        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in,
        })
    })
    .catch((err) => {
        console.log(err)
        res.sendStatus(400)
    })
})

app.listen("https://acoustify.onrender.com/api")