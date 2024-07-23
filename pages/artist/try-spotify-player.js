import React, { useState, useEffect } from 'react'
import SpotifyPlayer from '@/components/artist/spotify-player'
import { useSpotifyAuth } from '@/hooks/use-SpotifyAuth'

export default function TrySpotifyPlayer() {
  const [accessToken, setAccessToken] = useState(null)
  const { spotifyToken } = useSpotifyAuth()

  useEffect(() => {
    // 在這裡從後端獲取 access token
    // 這可能涉及調用您的登錄 API 端點

    //我先用前端手動生成去撈

    async function getAccessToken() {
      // 實現獲取 access token 的邏輯
      setAccessToken(spotifyToken)
    }
    getAccessToken()
  }, [])
  return (
    <>
      <h1>Spotify Web Playback</h1>
      {accessToken && <SpotifyPlayer accessToken={accessToken} />}
    </>
  )
}
