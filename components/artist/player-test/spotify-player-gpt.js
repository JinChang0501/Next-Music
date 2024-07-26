import React, { useEffect, useState, useCallback, useRef } from 'react'

export default function SpotifyPlayerGpt() {
  const [deviceId, setDeviceId] = useState('')
  const [isPlaying, setIsPlaying] = useState(false)
  const playerRef = useRef(null)
  const [token, setToken] = useState(null)

  const initializePlayer = useCallback(() => {
    const player = new window.Spotify.Player({
      name: 'GPT Player',
      getOAuthToken: (cb) => {
        cb(token)
      },
      volume: 0.5,
      enableMediaSession: true,
    })

    player.addListener('ready', ({ device_id }) => {
      console.log('Ready with Device ID', device_id)
      setDeviceId(device_id)
    })

    player.addListener('not_ready', ({ device_id }) => {
      console.log('Device ID has gone offline', device_id)
    })

    player.addListener('player_state_changed', (state) => {
      if (state) {
        setIsPlaying(!state.paused)
      }
    })

    player.connect()
    playerRef.current = player
  }, [token])

  // 在 localStorage 讀取 access_token
  useEffect(() => {
    setToken(localStorage.getItem('spotify_access_token'))
  }, [])

  useEffect(() => {
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
  }, [initializePlayer])

  const handleTogglePlay = useCallback(() => {
    if (playerRef.current) {
      playerRef.current.togglePlay()
    }
  }, [])

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">
        Spotify Web Playback SDK Quick Start
      </h1>
      <button
        onClick={handleTogglePlay}
        className="bg-purple1 text-white font-bold py-2 px-4 rounded"
      >
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      {deviceId && (
        <p className="mt-4 text-sm text-white">
          Connected to device: {deviceId}
        </p>
      )}
    </div>
  )
}
