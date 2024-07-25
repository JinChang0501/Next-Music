import React, { useEffect, useState, useCallback, useRef } from 'react'
// 套入 MediaSession 版本
export default function SdkPlayerTwo() {
  const [deviceId, setDeviceId] = useState('')
  const [isPlaying, setIsPlaying] = useState(false)
  const playerRef = useRef(null)
  const [token, setToken] = useState(null)
  const [is_paused, setPaused] = useState(false)
  const [is_active, setActive] = useState(false)
  const [playerReady, setPlayerReady] = useState(false)

  const [current_track, setTrack] = useState({
    name: '',
    album: {
      images: [{ url: '' }],
    },
    artists: [{ name: '' }],
  })

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
      setPlayerReady(true)
      initializeMediaSession()
    })

    player.addListener('not_ready', ({ device_id }) => {
      console.log('Device ID has gone offline', device_id)
      setPlayerReady(false)
    })

    player.addListener('player_state_changed', (state) => {
      if (!state) {
        return
      }

      setTrack(state.track_window.current_track)
      setPaused(state.paused)
      setActive(true)
      updateMediaSession(state)
    })

    player.connect().then((success) => {
      if (success) {
        console.log('The Web Playback SDK successfully connected to Spotify!')
      }
    })

    playerRef.current = player
  }, [token])

  const initializeMediaSession = useCallback(() => {
    if ('mediaSession' in navigator) {
      navigator.mediaSession.setActionHandler('play', () => handleTogglePlay())
      navigator.mediaSession.setActionHandler('pause', () => handleTogglePlay())
      navigator.mediaSession.setActionHandler('previoustrack', () =>
        handlePreviousTrack()
      )
      navigator.mediaSession.setActionHandler('nexttrack', () =>
        handleNextTrack()
      )
    }
  }, [])

  const updateMediaSession = useCallback((state) => {
    if ('mediaSession' in navigator) {
      navigator.mediaSession.metadata = new window.MediaMetadata({
        title: state.track_window.current_track.name,
        artist: state.track_window.current_track.artists
          .map((a) => a.name)
          .join(', '),
        album: state.track_window.current_track.album.name,
        artwork: [
          { src: state.track_window.current_track.album.images[0].url },
        ],
      })
    }
  }, [])

  useEffect(() => {
    setToken(localStorage.getItem('spotify_access_token'))
  }, [])

  useEffect(() => {
    if (!token) return
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
    if (playerRef.current && playerReady) {
      playerRef.current
        .togglePlay()
        .then(() => {
          setIsPlaying((prevState) => !prevState)
        })
        .catch((error) => {
          console.error('Error toggling play:', error)
        })
    }
  }, [playerReady])

  const handlePreviousTrack = useCallback(() => {
    if (playerRef.current && playerReady) {
      playerRef.current.previousTrack().catch((error) => {
        console.error('Error changing to previous track:', error)
      })
    }
  }, [playerReady])

  const handleNextTrack = useCallback(() => {
    if (playerRef.current && playerReady) {
      playerRef.current.nextTrack().catch((error) => {
        console.error('Error changing to next track:', error)
      })
    }
  }, [playerReady])

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
          onClick={handlePreviousTrack}
          disabled={!playerReady || !is_active}
        >
          &lt;&lt;
        </button>

        <button
          onClick={handleTogglePlay}
          className="bg-purple1 text-white font-bold py-2 px-4 rounded"
          disabled={!playerReady || !is_active}
        >
          {is_paused ? 'Play' : 'Pause'}
        </button>

        <button
          className="btn-spotify bg-purple3 py-2 px-2"
          onClick={handleNextTrack}
          disabled={!playerReady || !is_active}
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
