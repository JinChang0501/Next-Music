import React, { useState, useEffect } from 'react'

const track = {
  name: '',
  album: {
    images: [{ url: '' }],
  },
  artists: [{ name: '' }],
}

function OfficialPlayerTwo() {
  const [isPaused, setPaused] = useState(false)
  const [isActive, setActive] = useState(false)
  const [player, setPlayer] = useState(undefined)
  const [currentTrack, setTrack] = useState(track)
  const [sdkLoaded, setSdkLoaded] = useState(false)

  useEffect(() => {
    if (!sdkLoaded) {
      const script = document.createElement('script')
      script.src = 'https://sdk.scdn.co/spotify-player.js'
      script.async = true

      document.body.appendChild(script)
      setSdkLoaded(true)
    }

    window.onSpotifyWebPlaybackSDKReady = () => {
      const player = new window.Spotify.Player({
        name: 'Official Player TWO',
        getOAuthToken: (cb) => {
          const token = localStorage.getItem('spotify_access_token')
          cb(token)
        },
        volume: 0.5,
      })

      setPlayer(player)

      player.addListener('ready', ({ device_id }) => {
        console.log('Ready with Device ID', device_id)
        setActive(true)
      })

      player.addListener('not_ready', ({ device_id }) => {
        console.log('Device ID has gone offline', device_id)
      })

      player.addListener('player_state_changed', (state) => {
        if (!state) {
          console.error('No state found')
          return
        }

        setTrack(state.track_window.current_track)
        setPaused(state.paused)
        console.log('is_paused', state.paused)

        console.log('Currently Playing', state.track_window.current_track)
        console.log('Playing Next', state.track_window.next_tracks[0])
      })

      player.connect().then((success) => {
        if (success) {
          console.log('The Web Playback SDK successfully connected to Spotify!')
        } else {
          console.error('Failed to connect to the Web Playback SDK.')
        }
      })

      return () => {
        player.removeListener('ready')
        player.removeListener('not_ready')
        player.removeListener('player_state_changed')
        player.disconnect()
        setPlayer(undefined)
      }
    }
  }, [sdkLoaded])

  if (!isActive) {
    return (
      <>
        <div className="container">
          <h1 className="text-2xl text-white font-bold mb-4">
            Official Player TWO
          </h1>
          <div className="main-wrapper">
            <b>
              Instance not active. Transfer your playback using your Spotify app
            </b>
          </div>
        </div>
      </>
    )
  } else {
    return (
      <>
        <div className="container">
          <h1 className="text-2xl text-white font-bold mb-4">
            Official Player TWO
          </h1>

          <div className="main-wrapper">
            <img
              src={currentTrack?.album?.images[0].url}
              className="now-playing__cover"
              alt=""
            />

            <div className="now-playing__side">
              <div className="now-playing__name">{currentTrack?.name}</div>
              <div className="now-playing__artist">
                {currentTrack?.artists[0].name}
              </div>

              <button
                className="btn-spotify"
                onClick={() => {
                  player.previousTrack()
                }}
              >
                &lt;&lt;
              </button>

              <button
                className="btn-spotify"
                onClick={() => {
                  player.togglePlay()
                }}
              >
                {isPaused ? 'PLAY' : 'PAUSE'}
              </button>

              <button
                className="btn-spotify"
                onClick={() => {
                  player.nextTrack()
                }}
              >
                &gt;&gt;
              </button>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default OfficialPlayerTwo
