import React, { useEffect, useState, useCallback, useRef } from 'react'

export default function SdkPlayer() {
  const [deviceId, setDeviceId] = useState('')
  const [isPlaying, setIsPlaying] = useState(false)
  const playerRef = useRef(null)
  const [token, setToken] = useState(null)
  const [player, setPlayer] = useState(undefined)
  const [is_paused, setPaused] = useState(false)
  const [is_active, setActive] = useState(false)

  const track = {
    name: '',
    album: {
      images: [{ url: '' }],
    },
    artists: [{ name: '' }],
  }

  const [current_track, setTrack] = useState(track)

  const initializePlayer = useCallback(() => {
    const player = new window.Spotify.Player({
      name: 'Web Playback SDK Quick Start Player',
      getOAuthToken: (cb) => {
        cb(token)
      },
      volume: 0.5,
    })

    player.addListener('ready', ({ device_id }) => {
      console.log('Ready with Device ID', device_id)
      setDeviceId(device_id)
    })

    player.addListener('not_ready', ({ device_id }) => {
      console.log('Device ID has gone offline', device_id)
    })

    player.addListener('player_state_changed', (state) => {
      if (!state) {
        return
      }

      setTrack(state.track_window.current_track)
      setPaused(state.paused)

      player.getCurrentState().then((state) => {
        !state ? setActive(false) : setActive(true)
      })
    })

    player.connect().then((success) => {
      if (success) {
        console.log('The Web Playback SDK successfully connected to Spotify!')
      }
    })

    playerRef.current = player
  }, [token])

  // 在 localStorage 讀取 access_token
  useEffect(() => {
    setToken(localStorage.getItem('spotify_access_token'))
  }, [])

  useEffect(() => {
    if (!token) return // 確保 token 存在才初始化播放器
    const script = document.createElement('script')
    script.src = 'https://sdk.scdn.co/spotify-player.js'
    script.async = true

    document.body.appendChild(script)

    window.onSpotifyWebPlaybackSDKReady = initializePlayer

    return () => {
      document.body.removeChild(script)
      if (playerRef.current) {
        playerRef.current.disconnect()
      }
    }
  }, [initializePlayer, token])

  const handleTogglePlay = useCallback(() => {
    if (playerRef.current) {
      playerRef.current.togglePlay().then(() => {
        setIsPlaying(!isPlaying)
      })
    }
  }, [isPlaying])

  return (
    <>
      <div className="p-4 bg-gray-100 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">
          Spotify Web Playback SDK Quick Start
        </h1>
        <div className="now-playing__side">
          <div className="now-playing__name">{current_track.name}</div>
          <div className="now-playing__artist">
            {current_track.artists[0].name}
          </div>
        </div>
        <button
          className="btn-spotify bg-purple3 py-2 px-2"
          onClick={() => {
            playerRef.current?.previousTrack()
          }}
          disabled={!is_active}
        >
          &lt;&lt;
        </button>

        <button
          onClick={handleTogglePlay}
          className="bg-purple1 text-white font-bold py-2 px-4 rounded"
          disabled={!is_active}
        >
          {is_paused ? 'Play' : 'Pause'}
        </button>

        <button
          className="btn-spotify bg-purple3 py-2 px-2"
          onClick={() => {
            playerRef.current?.nextTrack()
          }}
          disabled={!is_active}
        >
          &gt;&gt;
        </button>
        {deviceId && (
          <p className="mt-4 text-sm text-gray-600">
            Connected to device: {deviceId}
          </p>
        )}
        {current_track.album.images[0]?.url && (
          <img
            src={current_track.album.images[0].url}
            className="now-playing__cover"
            alt="Album cover"
          />
        )}
      </div>
    </>
  )
}
