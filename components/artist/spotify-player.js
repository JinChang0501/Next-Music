import React, { useEffect, useState } from 'react'

const SpotifyPlayer = ({ accessToken }) => {
  const [player, setPlayer] = useState(null)

  useEffect(() => {
    if (!accessToken) return
    // const device_id = '2b061594cb6f248fb5da2f2fb7a6da5af02b0c41'
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
