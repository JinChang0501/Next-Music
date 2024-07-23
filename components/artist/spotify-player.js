import React, { useEffect, useState } from 'react'

const SpotifyPlayer = ({ accessToken }) => {
  const [player, setPlayer] = useState(null)

  useEffect(() => {
    if (!accessToken) return
    // device_id => SDK會自動生成
    const script = document.createElement('script')
    script.src = 'https://sdk.scdn.co/spotify-player.js'
    script.async = true

    document.body.appendChild(script)

    window.onSpotifyWebPlaybackSDKReady = () => {
      const player = new window.Spotify.Player({
        name: 'Web Playback SDK',
        getOAuthToken: (cb) => {
          cb(accessToken)
        },
        volume: 0.5, // 音量 0-1 之間
      })

      setPlayer(player)

      player.addListener('ready', ({ device_id }) => {
        console.log('Ready with Device ID', device_id)
      })

      player.addListener('not_ready', ({ device_id }) => {
        console.log('Device ID has gone offline', device_id)
      })

      player.connect().then((success) => {
        if (success) {
          console.log('The Web Playback SDK successfully connected to Spotify!')
        }
      })
    }

    return () => {
      // document.body.removeChild(script)
      if (script.parentNode) {
        document.body.removeChild(script)
      }
    }
  }, [accessToken])

  ///////////////////
  // 假設您已經有了曲目的 Spotify URI
  // const play = ({
  //   spotify_uri,
  //   playerInstance: {
  //     _options: { getOAuthToken, id },
  //   },
  // }) => {
  //   getOAuthToken((access_token) => {
  //     fetch(`https://api.spotify.com/v1/me/player/play?device_id=${id}`, {
  //       method: 'PUT',
  //       body: JSON.stringify({ uris: [spotify_uri] }),
  //       headers: {
  //         'Content-Type': 'application/json',
  //         Authorization: `Bearer ${access_token}`,
  //       },
  //     })
  //   })
  // }

  // // 使用方法
  // play({
  //   playerInstance: player,
  //   spotify_uri: 'spotify:track:7xGfFoTpQ2E7fRF5lN10tr',
  // })

  /////////////////
  const handlePlay = () => {
    player.resume().then(() => {
      console.log('Resumed!')
    })
  }

  const handlePause = () => {
    player.pause().then(() => {
      console.log('Paused!')
    })
  }

  return (
    <div>
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
    </div>
  )
}

export default SpotifyPlayer
