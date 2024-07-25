import React, { useState, useEffect, useCallback } from 'react'
import SpotifyPlayer from '@/components/artist/spotify-player-n'
import SpotifyPlayerGpt from '@/components/artist/spotify-player-gpt'
import {
  WebPlaybackSDK,
  usePlaybackState,
  usePlayerDevice,
} from 'react-spotify-web-playback-sdk'
import TogglePlay from '@/components/artist/player/toggle-play'
import SongTitle from '@/components/artist/player/song-title'

export default function TrySpotifyPlayer() {
  const [token, setToken] = useState(null)

  // 在 localStorage 讀取 access_token
  useEffect(() => {
    const storedToken = localStorage.getItem('spotify_access_token')
    if (storedToken) {
      setToken(storedToken)
    } else {
      console.error('在 localStorage 中找不到 Spotify access token')
    }
  }, [])

  const getOAuthToken = useCallback((callback) => callback(token), [])
  return (
    <>
      {/* <h1>Spotify Web Playback</h1> */}
      <div className="bg-white">
        {token ? (
          <WebPlaybackSDK
            deviceName="Makin awesome Spotify"
            getOAuthToken={getOAuthToken}
            volume={0.5}
            onError={(err) =>
              console.error('Spotify Web Playback SDK 錯誤:', err)
            }
          >
            <TogglePlay />
            <SongTitle />
          </WebPlaybackSDK>
        ) : (
          <p>正在載入 Spotify 播放器...</p>
        )}
      </div>
      <h1 className="text-white">GPT ver</h1>
      <SpotifyPlayerGpt />
    </>
  )
}

// function SpotifyPlayerComponents() {
//   const playbackState = usePlaybackState()
//   const device = usePlayerDevice()

//   return (
//     <>
//       {device && playbackState ? (
//         <>
//           <TogglePlay />
//           <SongTitle />
//         </>
//       ) : (
//         <p>Initializing player...</p>
//       )}
//     </>
//   )
// }
